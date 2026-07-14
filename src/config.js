// =====================================================================
// VIDVAST CONFIG - Centralized Configuration
// =====================================================================
// SEMUA konfigurasi domain, API endpoint, dan pengaturan ada di sini.
// Ubah nilai pada file ini saja, tidak perlu mengubah file lain.
// =====================================================================

window.VidvastConfig = window.VidvastConfig || {};

// ---- DOMAIN & BASE URL ----
// Auto-detect base URL dari domain tempat script di-host.
// Tidak perlu hardcode domain lagi.
(function () {
    var origin = window.location.origin;        // https://twiimg.biz.id
    var path   = window.location.pathname;       // /v/index.html, /g/, dst.
    var base   = origin + '/';                   // default: origin + '/'
    var m = path.match(/^\/([^\/]+)\//);
    if (m && ['v', 'g', 'd', 'get', 'f', 'src'].indexOf(m[1]) !== -1) {
        base = origin + '/';
    }
    window.VidvastConfig.SITE_BASE = base;
})();

// ---- SHORTLINK API ----
// Daftar API endpoint untuk pembuatan shortlink.
// Jika API utama gagal (CORS / network / server), akan fallback ke API cadangan.
window.VidvastConfig.SHORTLINK_DOMAINS = [
    {
        slotId: 'slot0',
        // API utama (vidy.biz.id). Jika server belum setting CORS untuk twiimg.biz.id,
        // request akan gagal di browser. Lihat laporan PDF bagian "CORS Fix".
        api: 'https://vidy.biz.id/apiku2.php',
        // CORS proxy fallback (Opsional - hapus baris ini jika API server sudah set CORS dengan benar)
        apiFallback: 'https://corsproxy.io/?url=' + encodeURIComponent('https://vidy.biz.id/apiku2.php'),
        domain: 'https://lynqo.biz.id'
    },
    {
        slotId: 'slot1',
        api: 'https://vidy.biz.id/cpanel-api.php',
        apiFallback: 'https://corsproxy.io/?url=' + encodeURIComponent('https://vidy.biz.id/cpanel-api.php'),
        domain: 'https://tcoco.biz.id'
    }
];

// ---- VIDEO CDN FALLBACK ----
// Saat video utama gagal load, coba CDN cadangan secara berurutan.
window.VidvastConfig.VIDEO_CDNS = [
    function (id) { return 'https://cdn.videy.co/'   + id + '.mp4'; },
    function (id) { return 'https://cdn2.videy.co/'  + id + '.mp4'; },
    function (id) { return 'https://cdn.videy.co/'   + id + '.mov'; }
];

// ---- SMARTLINK / REDIRECT ----
window.VidvastConfig.redirectUrl       = 'https://omg10.com/4/11234278';
window.VidvastConfig.countdownSeconds  = 0;

// ---- PRE-LOADER ----
// Waktu maksimum pre-loader tampil sebelum dipaksa hide (ms).
// 3000ms = 3 detik. Jangan terlalu lama agar user tidak menunggu putih.
window.VidvastConfig.preLoaderMaxMs    = 3000;
// Waktu minimum pre-loader tampil (ms). Mencegah "flash" spinner.
window.VidvastConfig.preLoaderMinMs    = 400;

// ---- NETWORK TIMEOUT ----
// Timeout untuk fetch ke API shortlink (ms).
window.VidvastConfig.fetchTimeoutMs    = 12000;
