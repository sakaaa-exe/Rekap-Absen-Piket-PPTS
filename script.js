// Example Data
const tableData = [
    //Absen Piket Senin 4/11
    {
        date: "Senin, 4/11",
        name: "Afif Faturrahman",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Aulia Puteri",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Faridah Nur Hisanah",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Hanifah Aliyah",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Muhammad Insan Kamil",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✘",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Safira Jaya",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Adit Setiawan",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✘",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Bagus Dwi Prasetyo",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✘",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Niki Setyawan",
        pagiDepan: "-",
        pagiBelakang: "✘",
        siangDepan: "-",
        siangBelakang: "✘",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Senin, 4/11",
        name: "Salim Sa'id",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 4/11",
        name: "Ibrahim",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✘",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✘"
    },

];

// Fungsi untuk mengubah format tanggal
function formatDate(dateString) {
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const [day, date] = dateString.split(", ");
    const [dayNumber, monthNumber] = date.split("/").map(Number);
    const monthName = months[monthNumber - 1];

    return `${day}, ${dayNumber} ${monthName} 2024`;
}

function loadRekap() {
    const tableBody = document.getElementById("rekap-table-body");
    let previousDate = null;

    tableBody.innerHTML = tableData.map((data, index) => {
        let row = "";
        const formattedDate = formatDate(data.date);

        // Tambahkan pembatas jika tanggal berubah
        if (data.date !== previousDate) {
            row += `<tr class="date-separator">
                        <td colspan="10" class="text-center"><strong>${formattedDate}</strong></td>
                    </tr>`;
        }

        row += `
            <tr>
                <td>${formattedDate}</td>
                <td>${data.name}</td>
                <td>${data.pagiDepan}</td>
                <td>${data.pagiBelakang}</td>
                <td>${data.siangDepan}</td>
                <td>${data.siangBelakang}</td>
                <td>${data.tpagi}</td>
                <td>${data.tsiang}</td>
                <td>${data.tdpagi}</td>
                <td>${data.tdsiang}</td>
            </tr>
        `;

        previousDate = data.date; // Perbarui tanggal sebelumnya

        return row;
    }).join("");
}

// Panggil fungsi untuk memuat tabel
loadRekap();

// Fungsi Enkripsi Nama
function encryptName(name) {
    // Contoh enkripsi: balik urutan huruf dan tambahkan kode
    return name.split("").reverse().map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join("");
}

// Fungsi Enkripsi Pesan
function encryptMessage(message) {
    // Contoh enkripsi: ubah setiap karakter menjadi kode biner ASCII
    return message.split("").map(c => c.charCodeAt(0).toString(2)).join(" ");
}

// Fungsi Kirim Pesan
function sendMessage(encrypt) {
    const name = document.getElementById("name")?.value; // Ambil nama dari input
    const message = document.getElementById("complain-text")?.value; // Ambil pesan dari textarea

    if (!name || !message) {
        alert("Harap isi nama dan pesan komplain terlebih dahulu.");
        return;
    }

    let encryptedName = name;
    let encryptedMessage = message;

    if (encrypt) {
        encryptedName = encryptName(name); // Enkripsi nama
        encryptedMessage = encryptMessage(message); // Enkripsi pesan
    }

    // Gabungkan nama dan pesan untuk dikirim
    const combinedMessage = `Nama: ${encryptedName}\nPesan: ${encryptedMessage}`;
    const whatsappUrl = `https://wa.me/6282298955589?text=${encodeURIComponent(combinedMessage)}`;
    window.open(whatsappUrl, "_blank");
}

// Load Data
document.addEventListener("DOMContentLoaded", loadRekap);
