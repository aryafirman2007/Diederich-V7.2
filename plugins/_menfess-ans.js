const delay = (time) => new Promise((res) => setTimeout(res, time));
export async function before(m) {
	if (!m.chat.endsWith("@s.whatsapp.net")) return !0;
	this.menfess = this.menfess ? this.menfess : {};
	let mf = Object.values(this.menfess).find(
		(v) => v.status === false && v.penerima == m.sender,
	);
	if (!mf) return !0;
	console.log({ text: m.text, type: m.quoted?.mtype });
	if (
		(m.text === "BALAS PESAN" || m.text === "") &&
		m.quoted.mtype == "extendedTextMessage"
	)
		return m.reply(
			"Silahkan kirim pesan balasan kamu.\nKetik pesan sesuatu lalu kirim, maka pesan otomatis masuk ke target balas pesan.",
		);
	else {
		let txt =
			`Hai kak @${mf.dari.split("@")[0]}, kamu menerima balasan nih.\nPesan balasannya:\n${m.text}\n`.trim();
		await this.reply(mf.dari, txt, null).then(() => {
			m.reply("Mengirim jawaban...");
			delay(1500);
			delete this.menfess[mf.id];
			return !0;
		});
	}
	return !0;
}
/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 */
