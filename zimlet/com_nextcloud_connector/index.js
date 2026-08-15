import { createElement, Component } from 'preact';
import { MenuItem } from '@zimbra-client/components';

import App from './components/app';
import CloudAttacher from './components/cloud-attacher';
import { registerComposeBridge, unregisterComposeBridge, updateComposeBridge } from './components/cloud-attacher/compose-bridge';
import { setApiLanguage } from './api';
import { languageFromContext, translate } from './i18n';

const SLUG = 'cloud';

class NextcloudErrorBoundary extends Component {
	state = { failed: false };

	componentDidCatch(error) {
		this.setState({ failed: true });
		if (globalThis.console && typeof globalThis.console.error === 'function') {
			globalThis.console.error(`[com_nextcloud_connector] ${translate(this.props.language, 'isolatedConsoleError')}`, error);
		}
	}

	render() {
		if (this.state.failed) {
			return (
				<div role="alert" style="margin:24px;padding:18px;border:1px solid #d9a7a3;border-radius:10px;background:#fff4f3;color:#7b1f19">
					<strong>{translate(this.props.language, 'nextcloudDisplayError')}</strong>
					<div>{translate(this.props.language, 'zimbraStillAvailable')}</div>
				</div>
			);
		}
		return <App workspaceScope={this.props.workspaceScope} userLanguage={this.props.language} />;
	}
}

export default function NextcloudZimlet(context) {
	const { plugins } = context;
	let account = {};
	try {
		account = typeof context.getAccount === 'function' ? (context.getAccount() || {}) : {};
	} catch (error) {}
	const workspaceScope = account.id || account.name || account.email || 'default';
	const language = languageFromContext(context, 'fr');
	setApiLanguage(language);

	function Router() {
		return [<NextcloudErrorBoundary path={`/${SLUG}`} workspaceScope={workspaceScope} language={language} />];
	}

	function AttachmentMenuItem(props) {
		return <CloudAttacher {...props} context={context} />;
	}

	class ComposeInsertionBridge extends Component {
		componentDidMount() { this.bridge = registerComposeBridge(this.props); }
		componentDidUpdate() { updateComposeBridge(this.bridge, this.props); }
		componentWillUnmount() { unregisterComposeBridge(this.bridge); }
		render() { return null; }
	}

	function NextcloudMenuItem() {
		return (
			<MenuItem responsive icon="cloud" href={`/${SLUG}`}>
				{translate(language, 'cloud')}
			</MenuItem>
		);
	}

	return {
		init() {
			// Zimbra owns the router context. Wrapping this slot in another context
			// provider can replace it and freeze navigation outside the Zimlet.
			plugins.register('slot::vertical-menu-item', NextcloudMenuItem);
			plugins.register('slot::routes', Router);
			plugins.register('slot::compose-footer-right-btn', ComposeInsertionBridge);
			plugins.register('slot::compose-attachment-action-menu', AttachmentMenuItem);
		}
	};
}
