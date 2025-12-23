function FindProxyForURL(url, host) {

    /* ========= USER CONFIG ========= */

    // Domains that should go DIRECT
    var DIRECT_DOMAINS = [
        "example.com",
        "*.example.com",
    ];

    // Domains that should go via PROXY
    var PROXY_DOMAINS = [
        "google.com",
        "*.google.com",
        "github.com",
        "*.github.com",
        "api.ipify.org",
        "localhost",
        "127.0.0.1",

    ];

    // Proxy server
    var PROXY = "PROXY 23.21.77.227:8118";

    /* ========= LOGIC ========= */

    for (var i = 0; i < DIRECT_DOMAINS.length; i++) {
        if (shExpMatch(host, DIRECT_DOMAINS[i])) {
            return "DIRECT";
        }
    }

    for (var j = 0; j < PROXY_DOMAINS.length; j++) {
        if (shExpMatch(host, PROXY_DOMAINS[j])) {
            return PROXY;
        }
    }

    // Default behavior
    return "DIRECT";
}
