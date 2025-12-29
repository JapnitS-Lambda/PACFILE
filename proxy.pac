function FindProxyForURL(url, host) {    
    // Normalize host (remove trailing dot, port, etc.)
    var normalizedHost = host.toLowerCase().replace(/\.$/, "").split(":")[0];
    
    /* ========= USER CONFIG ========= */
    var DIRECT_DOMAINS = [
        "example.com",
        "*.example.com",
        "localhost",
        "127.0.0.1"
    ];
    
    var PROXY_DOMAINS = [
        "github.com",
        "*.github.com",
        "google.com",
        "*.google.com",
        "api.ipify.org",
        "*.ipify.org"
    ];
    
    var PROXY = "PROXY 25.21.77.227:8118";
    
    /* ========= LOGIC ========= */
    // Check DIRECT_DOMAINS first (use original host for wildcard matching)
    for (var i = 0; i < DIRECT_DOMAINS.length; i++) {
        if (shExpMatch(host, DIRECT_DOMAINS[i]) || 
            shExpMatch(normalizedHost, DIRECT_DOMAINS[i])) {
            return "DIRECT";
        }
    }
    
    // Check PROXY_DOMAINS (use original host for wildcard matching)
    for (var j = 0; j < PROXY_DOMAINS.length; j++) {
        if (shExpMatch(host, PROXY_DOMAINS[j]) || 
            shExpMatch(normalizedHost, PROXY_DOMAINS[j])) {
            return PROXY;
        }
    }
    
    // Default behavior
    return "DIRECT";
}
