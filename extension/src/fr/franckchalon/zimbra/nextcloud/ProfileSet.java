package fr.franckchalon.zimbra.nextcloud;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/** Versioned encrypted payload containing up to three Nextcloud connections. */
final class ProfileSet {
    static final int MAX_PROFILES = 3;

    final String activeProfileId;
    final List<Profile> profiles;

    ProfileSet(String activeProfileId, List<Profile> profiles) {
        this.profiles = List.copyOf(profiles == null ? List.of() : profiles);
        String selected = activeProfileId;
        boolean found = false;
        if (selected != null) {
            for (Profile profile : this.profiles) if (profile.id.equals(selected)) { found = true; break; }
        }
        if (!found) {
            selected = this.profiles.isEmpty() ? "" : this.profiles.get(0).id;
        }
        this.activeProfileId = selected;
    }

    static ProfileSet empty() {
        return new ProfileSet("", List.of());
    }

    Optional<Profile> active() {
        if (activeProfileId == null || activeProfileId.isBlank()) return profiles.stream().findFirst();
        return profiles.stream().filter(profile -> profile.id.equals(activeProfileId)).findFirst()
            .or(() -> profiles.stream().findFirst());
    }

    Optional<Profile> byId(String profileId) {
        if (profileId == null || profileId.isBlank()) return active();
        return profiles.stream().filter(profile -> profile.id.equals(profileId)).findFirst();
    }

    ProfileSet upsert(Profile profile, boolean makeActive) {
        ArrayList<Profile> updated = new ArrayList<>(profiles);
        int index = -1;
        for (int i = 0; i < updated.size(); i++) {
            if (updated.get(i).id.equals(profile.id)) { index = i; break; }
        }
        if (index >= 0) updated.set(index, profile);
        else updated.add(profile);
        if (updated.size() > MAX_PROFILES) throw new IllegalArgumentException("Trois comptes Nextcloud au maximum peuvent être connectés");
        return new ProfileSet(makeActive ? profile.id : activeProfileId, updated);
    }

    ProfileSet select(String profileId) {
        if (byId(profileId).isEmpty()) throw new IllegalArgumentException("Compte Nextcloud inconnu");
        return new ProfileSet(profileId, profiles);
    }

    ProfileSet remove(String profileId) {
        ArrayList<Profile> updated = new ArrayList<>();
        for (Profile profile : profiles) if (!profile.id.equals(profileId)) updated.add(profile);
        if (updated.size() == profiles.size()) throw new IllegalArgumentException("Compte Nextcloud inconnu");
        return new ProfileSet(activeProfileId.equals(profileId) ? "" : activeProfileId, updated);
    }

    Map<String, Object> toStorageMap() {
        LinkedHashMap<String, Object> result = new LinkedHashMap<>();
        ArrayList<Map<String, Object>> storedProfiles = new ArrayList<>();
        for (Profile profile : profiles) storedProfiles.add(profile.toStorageMap());
        result.put("version", 3L);
        result.put("activeProfileId", activeProfileId);
        result.put("profiles", storedProfiles);
        return result;
    }

    @SuppressWarnings("unchecked")
    static ProfileSet fromStorageMap(Map<String, Object> source) {
        Object storedProfiles = source.get("profiles");
        if (storedProfiles instanceof List) {
            ArrayList<Profile> profiles = new ArrayList<>();
            for (Object item : (List<Object>) storedProfiles) {
                if (item instanceof Map && profiles.size() < MAX_PROFILES) {
                    profiles.add(Profile.fromStorageMap((Map<String, Object>) item));
                }
            }
            return new ProfileSet(Json.string(source, "activeProfileId", ""), profiles);
        }
        // Transparent migration of the 1.x/2.0/2.1 single-profile payload.
        Profile legacy = Profile.fromStorageMap(source);
        if (legacy.nextcloudUrl.isBlank() || legacy.username.isBlank()) return empty();
        return new ProfileSet(legacy.id, List.of(legacy));
    }
}
