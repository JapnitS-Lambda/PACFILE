function FindProxyForURL(url, host) {
    // Normalize host (remove trailing dot, port, etc.)
    host = host.toLowerCase().replace(/\.$/, "").split(":")[0];
    
    // CRITICAL: Always bypass localhost/127.0.0.1
    if (host === "localhost" || host === "127.0.0.1" || shExpMatch(host, "127.*") || shExpMatch(host, "localhost*")) {
        return "DIRECT";  // Will be rewritten to tunnel proxy if tunnel is ON
    }

    /* ========= USER CONFIG ========= */
    var DIRECT_DOMAINS = [
        "example.com",
        "*.example.com",
        "localhost",
        "127.0.0.1"
    ];

    var PROXY_DOMAINS = [
        "google.com",
        "*.google.com",
        "github.com",
        "*.github.com",
        "api.ipify.org",      // Exact match
        "*.ipify.org"         // Wildcard for all subdomains
    ];

    var PROXY = "PROXY 23.21.77.227:8118";

    /* ========= LOGIC ========= */
    // Check DIRECT_DOMAINS first
    for (var i = 0; i < DIRECT_DOMAINS.length; i++) {
        if (shExpMatch(host, DIRECT_DOMAINS[i])) {
            return "DIRECT";
        }
    }

    // Check PROXY_DOMAINS
    for (var j = 0; j < PROXY_DOMAINS.length; j++) {
        if (shExpMatch(host, PROXY_DOMAINS[j])) {
            return PROXY;  // Should return "PROXY 23.21.77.227:8118"
        }
    }

    // Default behavior
    return "DIRECT";
}
