let reactedMessages = new Set();

let handler = async (m, { conn }) => {
    // Mendapatkan nomor pengirim
    let sender = m.key.participant
        ? m.key.participant.split("@")[0]
        : m.key.remoteJid.split("@")[0];

    // Cek apakah pesan berasal dari nomor tertentu dan belum direaksi
    if (sender === "6283129627886" && !reactedMessages.has(m.key.id)) {
        await conn.sendMessage(m.key.remoteJid, {
            react: {
                text: "👑",
                key: m.key,
            },
        });
        // Tandai pesan sebagai sudah direaksi
        reactedMessages.add(m.key.id);
    }
};

handler.customPrefix = /./; // Menangkap semua pesan
handler.command = new RegExp(); // Tidak ada command khusus

export default handler;
