export const API_BASE = '/service/extension/nextcloud-connector';
let apiLanguage = 'fr';
let activeProfileId = '';

export function setApiLanguage(language) {
	apiLanguage = String(language || 'fr').slice(0, 12);
}

export function setActiveProfile(profileId) {
	activeProfileId = String(profileId || '').slice(0, 64);
}

async function parseResponse(response) {
	const contentType = response.headers.get('content-type') || '';
	let body;

	if (contentType.includes('application/json')) {
		body = await response.json();
	} else {
		body = { message: await response.text() };
	}

	if (!response.ok) {
		const error = new Error(body.error || body.message || `HTTP ${response.status}`);
		error.status = response.status;
		error.details = body;
		throw error;
	}

	return body;
}

export async function api(path, options = {}) {
	const headers = new Headers(options.headers || {});
	headers.set('X-Zimbra-Zimlet', 'com_nextcloud_connector');
	headers.set('X-Zimbra-Zimlet-Language', apiLanguage);
	if (activeProfileId) headers.set('X-Nextcloud-Profile', activeProfileId);

	if (options.json !== undefined) {
		headers.set('Content-Type', 'application/json; charset=utf-8');
	}

	const response = await fetch(`${API_BASE}${path}`, {
		method: options.method || 'GET',
		credentials: 'same-origin',
		headers,
		body: options.json !== undefined ? JSON.stringify(options.json) : options.body,
		signal: options.signal
	});

	return parseResponse(response);
}

export function fileUrl(path, disposition = 'inline', profileId = activeProfileId) {
	return `${API_BASE}/api/file?path=${encodeURIComponent(path)}&disposition=${encodeURIComponent(disposition)}&lang=${encodeURIComponent(apiLanguage)}&profileId=${encodeURIComponent(profileId)}`;
}

export function thumbnailUrl(file) {
	return `${API_BASE}/api/thumbnail?fileId=${encodeURIComponent(file.fileId || '')}&etag=${encodeURIComponent(file.etag || '')}&lang=${encodeURIComponent(apiLanguage)}&profileId=${encodeURIComponent(activeProfileId)}`;
}

export function editorUrl(path, profileId = activeProfileId) {
	return `${API_BASE}/editor?path=${encodeURIComponent(path)}&lang=${encodeURIComponent(apiLanguage)}&profileId=${encodeURIComponent(profileId)}`;
}

export function archiveUrl(directory, names, profileId = activeProfileId) {
	return `${API_BASE}/api/archive?directory=${encodeURIComponent(directory)}&files=${encodeURIComponent(JSON.stringify(names))}&lang=${encodeURIComponent(apiLanguage)}&profileId=${encodeURIComponent(profileId)}`;
}

export function versionUrl(fileId, versionId, name, profileId = activeProfileId) {
	return `${API_BASE}/api/version/file?fileId=${encodeURIComponent(fileId)}&versionId=${encodeURIComponent(versionId)}&name=${encodeURIComponent(name || '')}&lang=${encodeURIComponent(apiLanguage)}&profileId=${encodeURIComponent(profileId)}`;
}
