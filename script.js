// Data
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
        name: "Aulia Puteri Ramadhani",
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
        name: "Hanifah Aliyah Supin",
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
        name: "Safira Jaya Priyanti",
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
    {
        date: "Selasa, 5/11",
        name: "Siti Nur Anisa",
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
        date: "Selasa, 5/11",
        name: "Tito Firjatullah",
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
        date: "Selasa, 5/11",
        name: "Muhammad Rizky Athala",
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
        date: "Selasa, 5/11",
        name: "Missel Florensia",
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
        date: "Selasa, 5/11",
        name: "Rizky Saputra",
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
        date: "Selasa, 5/11",
        name: "Sakha Raditya",
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
        date: "Selasa, 5/11",
        name: "Bruryansyah",
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
        date: "Selasa, 5/11",
        name: "Nauval Al Hamidi",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Selasa, 5/11",
        name: "Krismawati",
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
        date: "Selasa, 5/11",
        name: "Evan Wisnu Tri Fadillah",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Rabu, 6/11",
        name: "Andrian Luis Stianto",
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
        date: "Rabu, 6/11",
        name: "Azwar Sofian",
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
        date: "Rabu, 6/11",
        name: "Luthfi Yogha Pratama",
        pagiDepan: "✘",
        pagiBelakang: "-",
        siangDepan: "✘",
        siangBelakang: "-",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Rabu, 6/11",
        name: "May Adhwa Roihana",
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
        date: "Rabu, 6/11",
        name: "Shindy Nabillah Irawan",
        pagiDepan: "✘",
        pagiBelakang: "-",
        siangDepan: "✘",
        siangBelakang: "-",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Rabu, 6/11",
        name: "Tiara Nur Anggraeni",
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
        date: "Rabu, 6/11",
        name: "Rizki Ramadhan",
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
        date: "Rabu, 6/11",
        name: "Muhammad Andika Saputra",
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
        date: "Rabu, 6/11",
        name: "Sania Indriani",
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
        date: "Rabu, 6/11",
        name: "Agustama Wahyu Ramadhan",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Rabu, 6/11",
        name: "Ario Bimo Perkasa",
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
        date: "Kamis, 7/11",
        name: "Denya Nilam Cahyarani",
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
        date: "Kamis, 7/11",
        name: "Winda Widiana",
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
        date: "Kamis, 7/11",
        name: "Farel Alfa Rizky",
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
        date: "Kamis, 7/11",
        name: "Raditya Kusuma Ardani",
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
        date: "Kamis, 7/11",
        name: "Danisha Sahla",
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
        date: "Kamis, 7/11",
        name: "Najwa Karimah",
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
        date: "Kamis, 7/11",
        name: "Ahmad Syarif Ali Rangga Saputra",
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
        date: "Kamis, 7/11",
        name: "Evan Wisnu Tri Fadillah",
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
        date: "Kamis, 7/11",
        name: "Muhammad Arfan Firdaus",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 7/11",
        name: "Talitha Aulia Larasati",
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
        date: "Kamis, 7/11",
        name: "Tubagus Khoirul Zaman",
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
        date: "Jumat, 8/11",
        name: "Matthew Handrian Pratama",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Jumat, 8/11",
        name: "Wilbert Bernady",
        pagiDepan: "✘",
        pagiBelakang: "-",
        siangDepan: "✘",
        siangBelakang: "-",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 8/11",
        name: "Hanifah Aliyah Supin",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Jumat, 8/11",
        name: "Rizky Saputra",
        pagiDepan: "✘",
        pagiBelakang: "-",
        siangDepan: "✘",
        siangBelakang: "-",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 8/11",
        name: "Muhammad Arieffirdaus",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✘",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 8/11",
        name: "Zahra Amelia Putri",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✘",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 8/11",
        name: "Muhammad Faris Darmawan",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Jumat, 8/11",
        name: "Bagus Dwi Prasetyo",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 8/11",
        name: "Dinda Renjani Intan Elvariyani",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✘",
        tdsiang: "✔"
    },
    {
        date: "Jumat, 8/11",
        name: "Evan Haris",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✘"
    },
    {
        date: "Senin, 11/11",
        name: "Afif Faturrahman",
        pagiDepan: "PJJ",
        pagiBelakang: "-",
        siangDepan: "PJJ",
        siangBelakang: "-",
        tpagi: "PJJ",
        tsiang: "PJJ",
        tdpagi: "PJJ",
        tdsiang: "PJJ"
    },
    {
        date: "Senin, 11/11",
        name: "Aulia Puteri Ramadhani",
        pagiDepan: "PJJ",
        pagiBelakang: "-",
        siangDepan: "PJJ",
        siangBelakang: "-",
        tpagi: "PJJ",
        tsiang: "PJJ",
        tdpagi: "PJJ",
        tdsiang: "PJJ"
    },
    {
        date: "Senin, 11/11",
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
        date: "Senin, 11/11",
        name: "Hanifah Aliyah Supin",
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
        date: "Senin, 11/11",
        name: "Muhammad Insan Kamil",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 11/11",
        name: "Safira Jaya Priyanti",
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
        date: "Senin, 11/11",
        name: "Adit Setiawan",
        pagiDepan: "-",
        pagiBelakang: "PJJ",
        siangDepan: "-",
        siangBelakang: "PJJ",
        tpagi: "PJJ",
        tsiang: "PJJ",
        tdpagi: "PJJ",
        tdsiang: "PJJ"
    },
    {
        date: "Senin, 11/11",
        name: "Bagus Dwi Prasetyo",
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
        date: "Senin, 11/11",
        name: "Niki Setiawan",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✘",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Senin, 11/11",
        name: "Salim Sa'id",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔✘",
        tpagi: "✔",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Senin, 11/11",
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
    {
        date: "Selasa, 12/11",
        name: "Siti Nur Anisa",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Selasa, 12/11",
        name: "Tito Firjatullah",
        pagiDepan: "PJJ",
        pagiBelakang: "-",
        siangDepan: "PJJ",
        siangBelakang: "-",
        tpagi: "PJJ",
        tsiang: "PJJ",
        tdpagi: "PJJ",
        tdsiang: "PJJ"
    },
    {
        date: "Selasa, 12/11",
        name: "Muhammad Rizky Athala",
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
        date: "Selasa, 12/11",
        name: "Missel Florensia",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Selasa, 12/11",
        name: "Rizky Saputra",
        pagiDepan: "✘",
        pagiBelakang: "-",
        siangDepan: "✘",
        siangBelakang: "-",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Selasa, 12/11",
        name: "Sakha Raditya",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Selasa, 12/11",
        name: "Bruryansyah",
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
        date: "Selasa, 12/11",
        name: "Nauval Al Hamidi",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Selasa, 12/11",
        name: "Krismawati",
        pagiDepan: "-",
        pagiBelakang: "PJJ",
        siangDepan: "-",
        siangBelakang: "PJJ",
        tpagi: "PJJ",
        tsiang: "PJJ",
        tdpagi: "PJJ",
        tdsiang: "PJJ"
    },
    {
        date: "Selasa, 12/11",
        name: "Evan Wisnu Tri Fadillah",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✘",
        tsiang: "✘",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Rabu, 13/11",
        name: "Andrian Luis Stianto",
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
        date: "Rabu, 13/11",
        name: "Azwar Sofian",
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
        date: "Rabu, 13/11",
        name: "Luthfi Yogha Pratama",
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
        date: "Rabu, 13/11",
        name: "May Adhwa Roihana",
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
        date: "Rabu, 13/11",
        name: "Shindy Nabillah Irawan",
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
        date: "Rabu, 13/11",
        name: "Tiara Nur Anggraeni",
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
        date: "Rabu, 13/11",
        name: "Rizki Ramadhan",
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
        date: "Rabu, 13/11",
        name: "Muhammad Andika Saputra",
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
        date: "Rabu, 13/11",
        name: "Sania Indriani",
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
        date: "Rabu, 13/11",
        name: "Agustama Wahyu Ramadhan",
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
        date: "Kamis, 14/11",
        name: "Denya Nilam Cahyarani",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 14/11",
        name: "Winda Widiana",
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
        date: "Kamis, 14/11",
        name: "Farel Alfa Rizky",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 14/11",
        name: "Raditya Kusuma Ardani",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 14/11",
        name: "Danisha Sahla",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 14/11",
        name: "Najwa Karimah",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 14/11",
        name: "Ahmad Syarif Ali Rangga Saputra",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 14/11",
        name: "Evan Wisnu Tri Fadillah",
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
        date: "Kamis, 14/11",
        name: "Muhammad Arfan Firdaus",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Kamis, 14/11",
        name: "Talitha Aulia Larasati",
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
        date: "Kamis, 14/11",
        name: "Tubagus Khoirul Zaman",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Jumat, 15/11",
        name: "Matthew Handrian Pratama",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Jumat, 15/11",
        name: "Wilbert Bernady",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 15/11",
        name: "Hanifah Aliyah Supin",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 15/11",
        name: "Rizky Saputra",
        pagiDepan: "✔✘",
        pagiBelakang: "-",
        siangDepan: "✔✘",
        siangBelakang: "-",
        tpagi: "✔✘",
        tsiang: "✔✘",
        tdpagi: "✔✘",
        tdsiang: "✔✘"
    },
    {
        date: "Jumat, 15/11",
        name: "Muhammad Arieffirdaus",
        pagiDepan: "✔",
        pagiBelakang: "-",
        siangDepan: "✔",
        siangBelakang: "-",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 15/11",
        name: "Zahra Amelia Putri",
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
        date: "Jumat, 15/11",
        name: "Muhammad Faris Darmawan",
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
        date: "Jumat, 15/11",
        name: "Bagus Dwi Prasetyo",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✘",
        tdsiang: "✘"
    },
    {
        date: "Jumat, 15/11",
        name: "Dinda Renjani Intan Elvariyani",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✔",
        tdsiang: "✔"
    },
    {
        date: "Jumat, 15/11",
        name: "Evan Haris",
        pagiDepan: "-",
        pagiBelakang: "✔",
        siangDepan: "-",
        siangBelakang: "✔",
        tpagi: "✔",
        tsiang: "✔",
        tdpagi: "✘",
        tdsiang: "✘"
    }
];

// Function to toggle the visibility of the menu
function toggleMenu(event) {
    const menuContent = document.querySelector(".menu-content");
    const menuToggle = document.querySelector(".menu-toggle");
    const isMenuOpen = menuContent.classList.contains("show");

    if (isMenuOpen) {
        menuContent.classList.remove("show");
        // Reset button animation
        menuToggle.style.transform = "rotate(0deg)";
    } else {
        menuContent.classList.add("show");
        // Apply button animation
        menuToggle.style.transform = "rotate(90deg)";
    }

    event.stopPropagation(); // Prevents the click from propagating to the document
}

// Close the menu if the user clicks outside of the menu
document.addEventListener("click", function(event) {
    const menuContent = document.querySelector(".menu-content");
    const menuToggle = document.querySelector(".menu-toggle");

    // Check if the click was outside of the menu and its toggle button
    if (!menuContent.contains(event.target) && event.target !== menuToggle) {
        menuContent.classList.remove("show");
        // Reset button animation
        menuToggle.style.transform = "rotate(0deg)";
    }
});

// Function to apply red background to "✘" cells in the table
function addRedBackgroundToX() {
    const tableCells = document.querySelectorAll('.rekap-table td');
    tableCells.forEach(cell => {
        if (cell.textContent === '✘') {
            cell.classList.add('red-background');
        }
    });
}

// Call the function after the table is loaded
document.addEventListener("DOMContentLoaded", function () {
    addRedBackgroundToX();
});

function toggleFooter() {
    const footer = document.getElementById("footer");
    const footerButton = document.getElementById("toggleFooterButton");

    if (footer.classList.contains("hidden-footer")) {
        footer.classList.remove("hidden-footer");
        footerButton.textContent = "Nonaktifkan Footer ✘";
    } else {
        footer.classList.add("hidden-footer");
        footerButton.textContent = "Aktifkan Footer ✔";
    }
}

// Function to format date with dynamic year
function formatDate(dateString) {
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const [day, date] = dateString.split(", ");
    const [dayNumber, monthNumber] = date.split("/").map(Number);
    const monthName = months[monthNumber - 1];

    // Determine year based on the month
    const year = monthNumber <= 6 ? 2025 : 2024;

    return `${day}, ${dayNumber} ${monthName} ${year}`;
}


// Function to load rekap data and apply styles
function loadRekap() {
    const tableBody = document.getElementById("rekap-table-body");
    let previousDate = null;

    tableBody.innerHTML = tableData.map((data, index) => {
        let row = "";
        const formattedDate = formatDate(data.date); // Format dengan tahun

        if (data.date !== previousDate) {
            row += `<tr class="date-separator">
                        <td colspan="10" class="text-center">
                            <strong>${formattedDate}</strong>
                            <button class="scroll-to-top" onclick="scrollToTop()">▲</button>
                        </td>
                    </tr>`;
        }

        row += `
            <tr>
                <td class="${getColorClass(data.date)}">${data.date}</td>
                <td class="${getColorClass(data.name)}">${data.name}</td>
                <td class="${getColorClass(data.pagiDepan)}">${data.pagiDepan}</td>
                <td class="${getColorClass(data.pagiBelakang)}">${data.pagiBelakang}</td>
                <td class="${getColorClass(data.siangDepan)}">${data.siangDepan}</td>
                <td class="${getColorClass(data.siangBelakang)}">${data.siangBelakang}</td>
                <td class="${getColorClass(data.tpagi)}">${data.tpagi}</td>
                <td class="${getColorClass(data.tsiang)}">${data.tsiang}</td>
                <td class="${getColorClass(data.tdpagi)}">${data.tdpagi}</td>
                <td class="${getColorClass(data.tdsiang)}">${data.tdsiang}</td>
            </tr>
        `;
        
        previousDate = data.date;
        return row;
    }).join('');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Initial status for red and green color features
let isRedColorFeatureEnabled = true;
let isGreenColorFeatureEnabled = true;

// Function to toggle the color features
function toggleColorFeature() {
    isRedColorFeatureEnabled = !isRedColorFeatureEnabled;
    isGreenColorFeatureEnabled = !isGreenColorFeatureEnabled;

    const button = document.getElementById("toggleColorMenu");
    if (isRedColorFeatureEnabled && isGreenColorFeatureEnabled) {
        button.textContent = "Nonaktifkan Tpabel Warna Merah Dan Hijau";
    } else {
        button.textContent = "Aktifkan Tabel Warna Merah Dan Hijau";
    }

    loadRekap(); // Re-render table to apply changes
}

// Function to determine the background color class
function getColorClass(value) {
    if (isRedColorFeatureEnabled && value === '✘') {
        return 'x-mark';
    }
    if (isGreenColorFeatureEnabled && value === '✔') {
        return 'check-mark';
    }
    return '';
}

// Initial call to load the table
document.addEventListener("DOMContentLoaded", function () {
    loadRekap();
});

// Fungsi untuk menghitung jumlah "✔" dan "✘" per anggota
function calculateSummary() {
    const summary = {};

    tableData.forEach(data => {
        if (!summary[data.name]) {
            summary[data.name] = {
                pagiDepan: { check: 0, cross: 0 },
                pagiBelakang: { check: 0, cross: 0 },
                siangDepan: { check: 0, cross: 0 },
                siangBelakang: { check: 0, cross: 0 },
                tpagi: { check: 0, cross: 0 },
                tsiang: { check: 0, cross: 0 },
                tdpagi: { check: 0, cross: 0 },
                tdsiang: { check: 0, cross: 0 }
            };
        }

        ["pagiDepan", "pagiBelakang", "siangDepan", "siangBelakang", "tpagi", "tsiang", "tdpagi", "tdsiang"].forEach(key => {
            if (data[key] === "✔") summary[data.name][key].check++;
            if (data[key] === "✘") summary[data.name][key].cross++;
        });
    });

    return summary;
}

// Fungsi untuk menampilkan data ke tabel di rekap-hitung.html
function loadSummary() {
    const summary = calculateSummary();
    const tableBody = document.getElementById("rekap-count-body");

    if (tableBody) {
        tableBody.innerHTML = Object.keys(summary).map((name, index) => {
            const data = summary[name];

            // Hitung total "✔" dan "✘" untuk setiap anggota
            const totalChecks = Object.values(data).reduce((total, item) => total + item.check, 0);
            const totalCrosses = Object.values(data).reduce((total, item) => total + item.cross, 0);

            return `
                <tr>
                    <td rowspan="2" data-index="${index}">${name}</td>
                    <td>${data.pagiDepan.check}✔</td>
                    <td>${data.pagiBelakang.check}✔</td>
                    <td>${data.siangDepan.check}✔</td>
                    <td>${data.siangBelakang.check}✔</td>
                    <td>${data.tpagi.check}✔</td>
                    <td>${data.tsiang.check}✔</td>
                    <td>${data.tdpagi.check}✔</td>
                    <td>${data.tdsiang.check}✔</td>
                    <td>${totalChecks}✔</td>
                </tr>
                <tr>
                    <td>${data.pagiDepan.cross}✘</td>
                    <td>${data.pagiBelakang.cross}✘</td>
                    <td>${data.siangDepan.cross}✘</td>
                    <td>${data.siangBelakang.cross}✘</td>
                    <td>${data.tpagi.cross}✘</td>
                    <td>${data.tsiang.cross}✘</td>
                    <td>${data.tdpagi.cross}✘</td>
                    <td>${data.tdsiang.cross}✘</td>
                    <td>${totalCrosses}✘</td>
                </tr>
            `;
        }).join("");
    }
}

// Panggil fungsi saat halaman `rekap-hitung.html` dimuat
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("rekap-count-body")) {
        loadSummary();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const tdElements = document.querySelectorAll(".rekap-count-table tbody td");

    tdElements.forEach(td => {
        if (td.textContent.includes("✔")) {
            td.classList.add("check-symbol");
        } else if (td.textContent.includes("✘")) {
            td.classList.add("cross-symbol");
        }
    });
});

// Function to search for a name in the table
function searchNameInTable() {
    const searchInput = document.getElementById("searchName").value.toLowerCase();
    const tableRows = document.querySelectorAll("#rekap-table-body tr");
    let found = false;

    tableRows.forEach(row => {
        const nameCell = row.querySelector("td:nth-child(2)");
        const name = nameCell ? nameCell.textContent.toLowerCase() : "";

        if (name.includes(searchInput)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    // Display message if no name found
    const messageElement = document.getElementById("no-name-message");
    if (!found && searchInput !== "") {
        messageElement.style.display = "block";
    } else {
        messageElement.style.display = "none";
    }
}

function findNameInTable() {
    const input = document.getElementById("findName").value.toLowerCase();
    const tableBody = document.getElementById("rekap-count-body");
    const rows = tableBody.querySelectorAll("tr");
    let found = false;

    rows.forEach((row, index) => {
        const firstCell = row.querySelector("td");
        if (firstCell && firstCell.hasAttribute("rowspan")) {
            const name = firstCell.textContent.toLowerCase();

            // Cocokkan nama dengan input pencarian
            if (name.includes(input)) {
                found = true;
                row.style.display = ""; // Tampilkan baris pertama
                const nextRow = rows[index + 1];
                if (nextRow) nextRow.style.display = ""; // Tampilkan baris kedua
            } else {
                row.style.display = "none"; // Sembunyikan baris pertama
                const nextRow = rows[index + 1];
                if (nextRow) nextRow.style.display = "none"; // Sembunyikan baris kedua
            }
        }
    });

    // Tampilkan pesan jika tidak ada hasil
    const noResultsMessage = document.getElementById("noResultsMessage");
    if (found) {
        noResultsMessage.style.display = "none";
    } else {
        noResultsMessage.style.display = "block";
    }
}

function searchByDate() {
    const input = document.getElementById("searchDate").value.trim().toLowerCase();
    const tableRows = document.querySelectorAll("#rekap-table-body tr");

    tableRows.forEach(row => {
        const dateCell = row.querySelector("td:first-child");
        const dateText = dateCell.textContent.trim().toLowerCase();

        if (dateText.includes(input)) {
            row.style.display = ""; // Tampilkan baris jika cocok
        } else {
            row.style.display = "none"; // Sembunyikan baris jika tidak cocok
        }
    });
}

// Function to find the latest date
function getLatestDate(data) {
    const dates = data.map((item) => {
        const [day, date] = item.date.split(", ");
        const [dayNum, month] = date.split("/");
        return new Date(2024, parseInt(month) - 1, parseInt(dayNum));
    });

    // Find the latest date
    const latestDate = new Date(Math.max.apply(null, dates));
    return tableData.find((item) => {
        const [day, date] = item.date.split(", ");
        const [dayNum, month] = date.split("/");
        const itemDate = new Date(2024, parseInt(month) - 1, parseInt(dayNum));
        return itemDate.getTime() === latestDate.getTime();
    }).date;
}

// Function to scroll to the row with the latest date in the table
function scrollToLatestDate() {
    const latestDate = getLatestDate(tableData);
    const rows = document.querySelectorAll("#rekap-table-body tr");

    rows.forEach(row => {
        const dateCell = row.cells[0]; // Kolom pertama berisi tanggal
        if (dateCell && dateCell.textContent === latestDate) {
            row.scrollIntoView({
                behavior: "smooth",
                block: "center" // Scroll ke tengah layar
            });

            // Tambahkan highlight setelah scroll selesai
            setTimeout(() => {
                row.classList.add("highlight-row");

                // Hapus highlight setelah animasi selesai
                setTimeout(() => {
                    row.classList.remove("highlight-row");
                }, 2000); // Sesuai durasi animasi highlight
            }, 500); // Waktu untuk memastikan scroll selesai
        }
    });
}

// Add 'Latest Date' on menu load
document.addEventListener("DOMContentLoaded", function () {
    const latestDate = getLatestDate(tableData);
    const latestDateButton = document.getElementById("latestDateButton");
    latestDateButton.textContent = `Tanggal Terbaru: ${latestDate}`;
});

// Fungsi Enkripsi Nama
function encryptName(name) {
    return name.split("").reverse().map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join("");
}

// Fungsi Enkripsi Pesan
function encryptMessage(message) {
    return message.split("").map(c => c.charCodeAt(0).toString(2)).join(" ");
}

// Fungsi Kirim Pesan ke Telegram
function sendEncryptedMessage() {
    const name = document.getElementById("name")?.value; // Ambil nama dari input
    const message = document.getElementById("complain-text")?.value; // Ambil pesan dari textarea

    if (!name || !message) {
        alert("Harap isi nama dan pesan komplain terlebih dahulu.");
        return;
    }

    const encryptedName = encryptName(name); // Enkripsi nama
    const encryptedMessage = encryptMessage(message); // Enkripsi pesan

    // Gabungkan nama dan pesan untuk dikirim
    const combinedMessage = `╔══════Pesan Komplain═══════\n╠═╼Nama: ${encryptedName}\n╚═╼Pesan: ${encryptedMessage}\n\n\n@sadtyy_bot`;
    
    const chatId = "981879069";
    const botToken = "7654564974:AAEEruGqvu69kvkDT36kTXi5mxYLnwUjsOg";

    // Kirim pesan ke Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(combinedMessage)}`;

    // Menggunakan fetch untuk mengirim pesan tanpa membuka URL di tab baru
    fetch(telegramUrl)
        .then(response => {
            if (response.ok) {
                // Tampilkan pop-up setelah pesan terkirim
                alert("Pesan Anda berhasil dikirim!");

                // Kosongkan form setelah pesan dikirim
                document.getElementById("name").value = "";
                document.getElementById("complain-text").value = "";
            } else {
                alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
            }
        })
        .catch(error => {
            alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
        });
}

// Load Data
document.addEventListener("DOMContentLoaded", loadRekap);
