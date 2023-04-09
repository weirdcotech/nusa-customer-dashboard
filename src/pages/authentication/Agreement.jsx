import { Link } from 'react-router-dom';

// material-ui
import { Box,Grid, Stack, Typography } from '@mui/material';
import Logo from '@src/components/Logo';
import MainCard from '@src/components/MainCard';
import { useTheme } from '@mui/material/styles';
// project import
import AuthAgremeent from './auth-forms/AuthAgreement';

// ================================|| LOGIN ||================================ //


const Agreement = () => {
    const theme = useTheme();
    return (
    <Box sx={{ minHeight: '100vh' }}>
        <Grid
            container
            direction="column"
            justifyContent="flex-end"
            sx={{
                minHeight: '100vh'
            }}
        >
            <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
                <Logo />
            </Grid>
            <Grid item xs={12}>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                >
                    <Grid item>

                        <MainCard
                            sx={{
                                maxWidth: { xs: '100%', lg: 1024 },
                                margin: { xs: 2.5, md:3 },
                                '& > *': {
                                    flexGrow: 1,
                                    flexBasis: '50%'
                                }
                            }}
                            content={false}
                            border={false}
                            boxShadow
                            shadow={theme.customShadows.z1}
                        >
                            <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                                            <Typography variant="h3">Syarat dan Ketentuan</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            
<h1>
    <strong>Pasal 1. Definisi</strong>
</h1>
<p>
    1.1. <em>Brand</em> Nusa International Logistics merupakan <em>brand </em>
    perusahaan PT. Nusa Logistik Internasional
</p>
<p>
    1.2. <strong>Nusa International Logistics atau disingkat NIL</strong>
adalah perusahaan berbadan hukum yang bergerak dibidang perusahaan    <em>International Freight Forwading</em> yang berbasis online di Indonesia.
</p>
<p>
1.3. Syarat dan Ketentuan adalah perjanjian digital antara    <em>customer</em> dengan NIL yang di dalamnya mengatur seperangkat
peraturan yang mengatur hak, kewajiban serta tanggung jawab    <em> customer</em> dan NIL, serta tata cara Penggunaan sistem layanan
    pembelian NIL.
</p>
<p>
    1.4. <em>Customer</em> adalah pihak yang menggunakan layanan Nusa
    International Logistics yang mengirimkan barang melalui NIL.
</p>
<p>
    1.5. Barang adalah wujud benda yang memiliki fisik barang yang dapat
    diperbelikan dan diantar dengan memenuhi kriteria perusahaan jasa
    pengiriman.
</p>
<p>
    1.6. Agen China adalah Mitra NIL yang berada di China dan bertugas untuk
    membantu seluruh transaksi yang terjadi di NIL.
</p>
<p>
    1.7. <em>Wooden Case</em> adalah peti yang terbuat dari kayu dan digunakan
    untuk kebutuhan pengiriman barang.
</p>
<p>
    1.8. <em>Supplier</em> adalah penjual barang yang berada di China dan
barang tersebut berada di masing-masing marketplace yang dipilih oleh    <em>customer</em>.
</p>
<p>
    1.9. Pihak Ketiga adalah nama CV. Mandala Utama Berkah yang bergerak
    dibidang Perdagangan Besar Atas Balas Jasa (FEE).
</p>
<h1>
    <strong>Pasal 2. Pendahuluan </strong>
</h1>
<p>
    Nusa International Logistics adalah perusahaan yang bergerak di bidang Jasa
    yang melayani Import Dari China Atau Negara Lainnya. Produk Jasa Nusa
    International Logistics meliputi:
</p>

<p>
    2.1. <strong> Jasa <em>Forwarding</em></strong> dari China, Thailand,
Singapura, dan Hongkong Ke Indonesia yang kami sebut sebagai    <strong>Nusa Freight Forwarding </strong>atau disingkat NFF
</p>

<p>
    2.1.1. Skala pengiriman laut dapat berupa FCL dan LCL
</p>
<p>
    2.1.2. Lingkupan transportasi dapat melalui udara dan laut
</p>

<p>
    2.2 <strong>Jasa Pengadaan Barang Internasional</strong> dari China ke
    Indonesia yang kami sebut sebagai <strong>Nusa Global Procurement</strong>
    atau disingkat NGP. Berikut adalah lingkupan produk jasa ini:
</p>

<p>
    2.2.1 Jasa remitansi dari IDR (Indonesian Rupiah) ke CNY (Chinese Yuan),
    THB (Thai Baht), SGD (Singaporean Dollar), HKD (Hongkong Dollar), dan USD
(US Dollar). Jasa ini kami sebut sebagai    <strong>Nusa Money Transmitter</strong> atau disingkat NMT.
</p>
<p>
2.2.2 Jasa pembelian barang dari China yang kami sebut sebagai    <strong>Nusa Purchase Assistant</strong> atau disingkat NPA.
</p>
<p>
2.2.3 Jasa pencarian barang dari China yang kami sebut sebagai    <strong>Nusa Supplier Sourcing</strong> atau disingkat NSS.
</p>
<h1>
    <strong>Pasal 3. Ketentuan Teknis NFF </strong>
    <br/>
    <em>Customer</em>
    dan Nusa International Logistics sepakat bahwa harga yang diberikan oleh
    NIL berbentuk (All In) borongan dari gudang asal (luar negeri) hingga tiba
    di gudang NIL di Jakarta.
</h1>

<p>
    3.1. <em>Customer</em> dan NIL sepakat bahwa biaya susulan dikemudian hari
    dapat ditagihkan apabila terdapat hal-hal tak terduga diluar pengiriman
    secara normalnya. Kesepakatan mengenai biaya susulan disesuaikan dengan
    hasil diskusi <em>customer</em> dengan representatif NIL.
</p>
<p>
    3.2. <em>Customer</em> dan NIL sepakat bahwa biaya susulan dikemudian hari
    dapat ditagihkan apabila jasa yang dipakai adalah jasa Ex works (EXW)
</p>
<p>
3.3. <em>Customer</em> wajib memberi dokumen berupa <em>invoice</em> dan    <em>packing list</em> yang sudah dibeli dari pemasoknya kepada NIL. Setelah
    memberikan dokumen-dokumen tersebut <em>customer</em> dianggap secara sadar
    tanpa paksaan dari pihak manapun untuk memilih barang sesuai tipe, jumlah,
bentuk, dan deskripsi yang diminta oleh <em>customer</em> dan    <em>customer</em> sepakat kepada NIL bahwa tidak ada penggantian atas
    kesalahan dokumen di kemudian hari.
</p>
<p>
    3.4. Adapun estimasi waktu pengiriman jalur laut yaitu 4 – 6 Minggu dari
    keberangkatan kapal sampai barang tiba di gudang Jakarta. Estimasi ini
    berlaku untuk semua negara cangkupan NIL.
</p>
<p>
    3.5. Adapun estimasi waktu pengiriman jalur udara yaitu 7-10 hari kerja
    (tergantung pemilihan jenis layanan penerbangan)
</p>
<p>
3.6. NIL menerima jasa EXWORKS (Pickup) barang dari <em>supplier</em>    <em>customer</em>.
</p>
<p>
    3.7. Apabila terjadi lampu merah di bea cukai (<em>RED LINE</em>) dan/atau
    isu pelayaran baik masalah internal maupun masalah kapal milik vendor NIL,
    maka <em>customer</em> wajib menunggu barang <em>customer</em> sampai tanpa
    adanya tekanan, ganti rugi dan tuntutan hukum apapun kepada pihak NIL
    dikarenakan hal tersebut di luar tanggung jawab dan/atau kapasitas NIL.
</p>
<p>
    3.8. <em>Customer</em> dan NIL sepakat bahwa minimal pengiriman melalui
    jalur laut dari China adalah 0,1 cbm /tanda terima gudang /sekali terima
    barang. Bahwa setiap paket yang diterima minimal adalah 0,1 cbm, dan
    bilamana barang yang dikirim tidak sampai 0,1 cbm, maka akan dihitung biaya
    minimum 0,1 cbm. Aturan minimal pengiriman tersebut berlaku juga untuk dari
    Thailand, Singapura, dan Hongkong dengan minimal 0,5 cbm.
</p>
<p>
    3.9. <em>Customer</em> dan NIL sepakat bahwa minimal pengiriman jalur udara
    dari China adalah 1 kg, sedangkan untuk negara Thailand, Singapura, dan
    Hongkong adalah 5 kg.
</p>
<p>
    3.10. <em>Customer</em> dan NIL sepakat bahwa Berat Maksimum untuk jalur
    laut adalah seberat 600 kg/cbm. Apabila melebihi berat maksimal tersebut,
    maka barang akan masuk ke kategori maka akan dikenakan tambahan biaya Rp
    6.000/kg.
</p>
<p>
    3.11. <em>Customer</em> dan NIL sepakat bahwa harga pengiriman sudah
    termasuk pengurusan bea cukai, pajak, dokumen serta pengiriman dari Negara
    Asal ke Indonesia, sehingga tidak ada biaya lain lain diluar harga yang
    akan dikenakan kepada <em>customer</em> untuk kiriman (All in). Terkecuali
    pengiriman ke alamat diluar kota Jakarta atau dengan menggunakan ekspedisi
    lokal.
</p>
<p>
    3.12. <em>Customer</em> dan NIL sepakat bahwa pengiriman di atas 0,1 cbm
dengan alamat di Jakarta akan mendapat gratis pengiriman ke alamat    <em>customer</em>, sedangkan untuk wilayah luar Jakarta akan kami kirimkan
    melalui jasa ekspedisi lokal pilihan <em>customer</em> dengan biaya
    ekspedisi lokal akan ditanggung oleh <em>customer</em> secara pribadi.
</p>
<p>
    3.13. <em>Customer</em> dan NIL sepakat bahwa setiap pengiriman wajib
    menyertakan packing list dan invoice sebagai dasar harga dan jumlah untuk
    pendataan dasar dari nilai asuransi barang.
</p>
<p>
    3.14. <em>Customer</em> wajib memberikan alamat akhir yang benar dan sesuai
    dengan alamat yang diberikan kepada NIL sehingga jika barang yang tidak
    diterima disebabkan oleh kekeliruan dan/atau kesalahan <em>customer</em>,
    maka NIL tidak akan bertanggung jawab atas barang tersebut.
</p>
<p>
    3.15. <em>Customer</em> sepakat untuk mengirimkan data Packing List dan
    Invoice secara benar. Apabila terdapat kekeliruan dalam invoice terutama
    deskripsi barang dan kuantitas maka <em>Customer</em> sepakat untuk
    menanggung denda yang timbul dalam proses <em>clearance </em>di negara asal
    maupun di Indonesia.
</p>
<p>
    3.16. <em>Customer</em> dan NIL sepakat bahwa <em>customer</em> wajib
melakukan pembayaran kepada NIL setelah NIL mengkonfirmasi bahwa barang    <em>customer </em>telah berada di Jakarta dibuktikan dengan dalam bentuk
    foto bilamana diperlukan.
</p>
<p>
    3.17. Apabila dalam 1 bulan <em>customer</em> tidak melakukan konfirmasi
    kehilangan barang, maka NIL tidak lagi bertanggung jawab atas kehilangan
    tersebut.
</p>
<p>
    3.18. Apabila 14 hari setelah invoice/penagihan dilakukan barang masih
    tidak diambil dari gudang Jakarta, maka akan dikenakan biaya penumpukan
    barang sebesar Rp 5000,-/CBM/hari.
</p>
<p>
    3.19. Apabila dalam kurun waktu 3×24 jam <em>customer</em> tidak mengajukan
    keluhan barang kurang dan lainnya, maka pengajuan claim sudah tidak dapat
    dilakukan.
</p>
<p>
    3.20. Pengukuran ulang hanya bisa dilakukan di gudang NIL, setelah barang
    keluar dari gudang NIL, maka <em>customer</em> dianggap telah sepakat
    mengenai ukuran barang. Jika ingin mengajukan klaim hasil ukur ulang hanya
    bisa dilakukan jika ada perwakilan NIL.
</p>
<p>
    3.21. <em>Customer</em> melepaskan NIL dari tuntutan hukum atas kelalaian
    dan/atau kesalahan yang disebabkan oleh <em>customer </em>dan NIL tidak
    bertanggung jawab atas tuntutan perdata dan/atau pidana dari pihak manapun
    atas kelalaian dan/atau kesengajaan yang dilakukan oleh <em>customer </em>
    namun juga tidak terbatas pada ketentuan-ketentuan yang telah diuraikan
    diatas.
</p>
<h1>
    <strong>Pasal 4. Ketentuan Barang </strong>
</h1>

<p>
    4.1. NIL tidak menerima barang-barang yang dilarang oleh pemerintah
    setempat dan/atau pemerintah Indonesia sesuai dengan peraturan
    perundang-undang yang berlaku di Indonesia.
</p>
<p>
    4.2. Adapun barang lainnya yang dilarang dalam jalur udara adalah sebagai
    berikut:
</p>

<p>
    4.2.1 Barang cairan;
</p>
<p>
    4.2.2 Barang kosmetik cair;
</p>
<p>
    4.2.3 Barang mudah meledak, flammable, contoh aerosol, bahan peledak dll;
</p>
<p>
    4.2.4 Benda &amp;/ alat tajam;
</p>
<p>
    4.2.5 <em>Battery</em>, AKI dan <em>powerbank</em>
</p>
<p>
    4.2.6 Laptop dan <em>Handphone</em>;
</p>
<p>
    4.2.7 Dan barang lainnya yang dilarang oleh peraturan perundang-undangan
    yang berlaku di Indonesia.
</p>
<p>
    4.3 Barang lainnya yang dilarang dalam jalur laut dari China adalah
</p>

<p>
    4.3.1 Barang mudah terbakar, barang <em>flammable</em>, Aerosol;
</p>
<p>
    4.3.2 Kendaraan bermotor;
</p>
<p>
    4.3.3 <em>Frame</em> motor
</p>
<p>
    4.3.4 Mesin motor/mobil
</p>
<p>
    4.3.5 <em>Vaporizer</em> &amp; cairannnya, rokok &amp; tembakau, minuman
    beralkohol;
</p>
<p>
    4.3.6 <em>Handphone</em> dan Laptop;
</p>
<p>
    4.3.7 Segala jenis hewan dan tumbuhan hidup atau yang sudah mati terkecuali
    tumbuhan sintetis;
</p>
<p>
    4.3.8 Dan barang lainnya yang dilarang oleh peraturan perundang-undangan
    yang berlaku di Indonesia.
</p>
<p>
    4.4 Barang lainnya yang dilarang dalam jalur laut dari Singapura adalah
</p>

<p>
    4.4.1 <em>Garment</em>
</p>
<p>
    4.4.2 <em>Textile</em>
</p>
<p>
    4.4.3 Baterai utuh
</p>
<p>
    4.4.4 Rokok
</p>
<p>
    4.4.5 Minuman keras atau beralkohol
</p>
<p>
    4.4.6 <em>Frame</em> motor
</p>
<p>
    4.4.7 Mesin motor/mobil
</p>
<p>
    4.4.8 Hewan
</p>
<p>
    4.4.9 Tumbuhan hidup
</p>
<p>
    4.4.10 Freon
</p>
<p>
    4.5 Barang lainnya yang dilarang dalam jalur laut dari Thailand adalah
</p>

<p>
    4.5.1 Barang <em>branded</em> dan <em>branded</em> KW
</p>
<p>
    4.5.2 <em>Garment</em>
</p>
<p>
    4.5.3 <em>Textile</em>
</p>
<p>
    4.5.4 Baterai utuh
</p>
<p>
    4.5.5 Rokok
</p>
<p>
    4.5.6 Minuman keras atau beralkohol
</p>
<p>
    4.5.7 <em>Frame</em> motor
</p>
<p>
    4.5.8 Mesin motor/mobil
</p>
<p>
    4.5.9 Hewan
</p>
<p>
    4.5.10 Tumbuhan hidup
</p>
<p>
    4.5.11 Freon
</p>
<p>
    4.6 NIL dapat menerima pengiriman barang pecah belah, namun konsekuensi
    hukum dan kerusakan ditanggung sepenuhnya oleh pihak <em>customer</em> dan
    NIL tidak bertanggung jawab atas kerusakan barang pecah belah tersebut.
</p>
<p>
    4.7 <em>Customer</em> dan NIL sepakat bahwa <em>customer</em> wajib secara
pribadi untuk memastikan setiap barang yang akan dikirim harus di<em>packing</em> dengan baik dan benar, khusus barang pecah belah wajib di    <em>packing </em>dengan menggunakan <em>Wooden case</em>, sehingga segala
    bentuk kerusakan, pecah dan bocor diluar tanggung jawab NIL.
</p>
<p>
    4.8 Setiap barang yang mudah rusak seperti barang pecah belah, keramik,
    elektronik, komponen sepeda, komponen lainnya dan barang-barang lainnnya
yang dianggap oleh Pihak NIL sebagai barang yang mudah rusak, maka<em>customer </em>wajib mengkonfirmasi kepada NIL untuk ditambahkan    <em>packing </em>kayu agar kiriman lebih aman dari <em>supplier</em>.
    Apabila <em>customer </em>tidak mengkonfirmasi dan/atau tidak ada
    pemberitahuan sebelumnya kepada NIL mengenai barang yang mudah rusak dan
    tidak meminta <em>packing </em>kayu, maka NIL tidak bertanggung jawab atas
    kerusakan yang timbul akibat pengiriman dari China ke Indonesia dan
    pengiriman dari NIL kepada alamat <em>customer</em>.
</p>
<p>
    4.9 Apabila <em>customer </em>ingin membutuhkan <em>Wooden Case</em>, maka
    tambahan akan dikenakan biaya sesuai dengan perhitungan dari NIL.
</p>
<h1>
    <strong>Pasal 5. Ketentuan Teknis NGP</strong>
</h1>

<p>
    5.1. <strong>Jasa Nusa Global Procurement atau disingkat NGP</strong> China
    adalah melalui jasa CV. Mandala Utama Berkah dengan Nomor Rekening di Bank
    Central Asia (BCA) atas nama Mandala Utama Berkah dengan Nomor Rekening
    6805137197, sehingga selain rekening yang tercatat di Syarat dan Ketentuan
    ini bukan merupakan rekening resmi CV. Mandala Utama Berkah. Kami tidak
bertanggung jawab kelalaian dan/atau kesengajaan yang dilakukan oleh    <em>customer </em>dengan mentransfer ke rekening yang bukan rekening resmi
    sebagaimana dijelaskan diatas.
</p>
<p>
    5.2. Lingkup NMT mencangkup negara China, Thailand, Singapura dan Hongkong,
    sedangkan lingkup NPA &amp; NSS mencangkup hanya negara China.
</p>
<p>
5.3. Dengan menggunakan jasa NMT &amp; NPA dari CV. Mandala Utama Berkah,    <em>customer </em>dengan sadar memilih <em>supplier</em> di luar negeri
    atas pilihan pribadi. CV. Mandala Utama Berkah tidak bertanggung jawab atas
    barang kiriman yang dibelikan jika di antaranya terdapat ketidaksesuaian
    tipe, warna, model, fungsional, dan barang palsu.
</p>
<p>
5.4. CV. Mandala Utama Berkah selalu menawarkan produk terbaik dari    <em>supplier</em> yang dipercaya, namun untuk mengantisipasi hal yang tidak
    diinginkan CV. Mandala Utama Berkah menyarankan menggunakan jasa tambahan
    berupa <em>Quality Control</em>.
</p>
<p>
    5.5. <em>Quality Control </em>(QC) terhadap barang yang dibantu carikan
    melalui layanan NSS. Jika customer tidak membeli jasa QC maka CV. Mandala
    Utama Berkah tidak bertanggung jawab atas kuantitas, kualitas, dan tipe
    yang dikirim oleh <em>supplier.</em> <em>Quality Control</em> (QC) yang
    dilakukan CV. Mandala Utama Berkah bekerja dengan mengirimkan agen QC ke
    pabrik atau gudang <em>supplier</em>. Biaya QC bervariasi bergantung pada
    lokasi supplier dan permintaan <em>customer</em>. Silakan konsultasikan
    detail tambahan layanan QC kepada perwakilan NIL.
</p>
<p>
    5.6. Jasa NGP China merupakan jasa dari CV. Mandala Utama Berkah untuk
mengirimkan sejumlah dana langsung ke <em>supplier</em> atau rekening    <em>marketplace</em> China. <em>Customer</em> secara sadar memilih dan
    memutuskan untuk melakukan transfer dana ini dan melepaskan tanggung jawab
apapun kepada CV. Mandala Utama Berkah terhadap penipuan dari    <em>supplier</em>.
</p>
<h1>
    <strong>Pasal 6. Asuransi Dan Klaim</strong>
</h1>

<p>
    6.1. <em>Customer</em> akan mendapatkan uang jaminan dari NIL sesuai dengan
kesepakatan bilamana barang yang dibeli tidak tiba di alamat    <em>customer</em> dikarenakan alasan <em>force majeure</em>, kebijakan
    pemerintah, tertahan saat proses <em>clearance,</em> kecuali pengiriman
    barang yang dibeli dilarang oleh hukum negara setempat.
</p>
<p>
    6.2. <em>Customer</em> sepakat dengan kami bahwa uang jaminan sebagaimana
    telah diatur di atas maka wajib dikembalikan kepada pihak NIL bilamana
    barang sudah berada di gudang pihak NIL.
</p>
<p>
    6.3. Apabila pihak <em>customer </em>tidak mengembalikan uang jaminan
    sesuai dengan waktu dan/atau jumlah yang telah ditentukan kepada pihak NIL,
    maka NIL berhak menahan baik sebagian/keseluruhan dan/atau menjual/melelang
    barang milik customer kepada pihak lainnya dan pihak NIL dibebaskan dari
    tuntutan dari pihak <em>customer</em>.
</p>
<p>
    6.4. <em>Customer </em>sepakat dengan NIL bahwa <em>customer </em>telah
    memilih <em>supplier </em>atas keputusan pribadi dengan sadar tanpa paksaan
dari pihak NIL sesuai dengan deskripsi yang telah dipilih dan    <em>customer </em>bertanggung jawab secara tanggung renteng, sehingga NIL
    tidak bertanggung jawab bilamana barang yang <em>customer </em>terima
    merupakan barang yang tidak sesuai namun juga tidak terbatas pada barang
    palsu, kualitas buruk, ukuran tidak sesuai, warna tidak sesuai, jumlah
    tidak sesuai, dan banyak hal lainnya yang tidak sesuai.
</p>
<p>
    6.5. NIL dibebaskan dari tanggung jawab atau klaim dalam bentuk apapun
    bilamana terjadi kerusakan terhadap Barang, Barang penyok, Barang Pecah
    Belah akibat kelalaian saat pembelian dan <em>customer </em>tidak meminta
    packing kayu tambahan kepada NIL untuk keamanan barang yang dipesan.
</p>
<p>
6.6. <em>Customer </em>dan NIL sepakat bahwa setiap kiriman dari NIL kepada<em>customer </em>mempunyai asuransi senilai harga barang yang tertera di<em>Invoice </em>yang meliputi kehilangan barang, kapal tenggelam,    <em>force majeure</em>, bencana alam, penyitaan oleh bea cukai, namun
    bilamana tidak menggunakan asuransi tambahan, maka <em>customer </em>hanya
    mendapatkan Uang Klaim dari kami maksimal yaitu sebesar Rp. 20.000.000/cbm.
</p>
<p>
    6.7. <em>Customer </em>dan NIL sepakat bahwa setiap kiriman dari NIL sudah
    mendapat gratis asuransi kehilangan hingga Rp. 20.000.000/cbm.
</p>
<p>
    6.8. Untuk barang yang memiliki <em>value </em>lebih dari Rp.
    20.000.000/cbm maka dipersilakan untuk konsultasi lebih lanjut terkait
    asuransi dengan per
</p>
<p>
    6.9. <em>Customer </em>dan NIL sepakat bahwa kiriman import melalui laut
    tidak dilengkapi dengan asuransi kerusakan. <em>Customer </em>diharuskan
    menggunakan packing WOODEN FRAME agar barang anda aman dari kerusakan.
</p>
<p>
    6.10. <em>Customer </em>dan NIL sepakat bahwa setiap barang yang dikirim
    wajib di packing g<em>reen fiber bag</em> agar barang kiriman tidak
    tercecer saat terjadi pemeriksaan (<em>behandle</em>) oleh pihak bea cukai.
    NIL tidak bertanggung jawab atas kehilangan barang hilang akibat tidak
    dilakukan <em>packing green fiber bag</em>.
</p>
<h1>
    <strong>Pasal 7. Batasan Tanggung Jawab</strong>
</h1>
<p>
    7.1. NIL selalu berupaya untuk menjaga layanan NIL aman, nyaman, dan
    berfungsi dengan baik, tetapi NIL tidak dapat menjamin operasi
    terus-menerus atau akses ke layanan NIL dapat selalu sempurna. Informasi
dan data dalam NIL memiliki kemungkinan tidak terjadi secara    <em>real time</em>.
</p>
<p>
    7.2. <em>Customer </em>setuju bahwa <em>customer </em>memanfaatkan layanan
    NIL atas risiko <em>customer </em>sendiri, dan layanan NIL diberikan kepada
    Customer pada “SEBAGAIMANA ADANYA” dan “SEBAGAIMANA TERSEDIA”.
</p>
<p>
    7.3. Sejauh diizinkan oleh hukum yang berlaku di Indonesia, maka NIL
    (termasuk Induk Perusahaan, direktur, dan karyawan) tidak bertanggung
    jawab, dan <em>customer </em>setuju untuk tidak menuntut NIL bertanggung
    jawab, atas segala kerusakan atau kerugian (termasuk namun tidak terbatas
    pada hilangnya uang, reputasi, keuntungan, atau kerugian tak berwujud
lainnya) yang diakibatkan karena kelalaian dan/atau pelanggaran    <em>customer </em>secara langsung atau tidak langsung dari:
</p>


<p>
    7.3.1 Penggunaan atau ketidakmampuan <em>customer </em>dalam menggunakan
    layanan NIL;
</p>
<p>
    7.3.2 Harga, pengiriman atau petunjuk lain yang tersedia dalam layanan NIL;
</p>
<p>
    7.3.3 Gangguan dalam diluar kapasitas NIL;
</p>
<p>
    7.3.4 Kelalaian dan kerugian yang ditimbulkan oleh <em>customer</em>;
</p>
<p>
    7.3.5 Kualitas Barang.
</p>
<p>
    7.3.6 Pengiriman Barang;
</p>
<p>
    7.3.7 Pelanggaran Hak atas Kekayaan Intelektual;
</p>
<p>
    7.3.8 Pencemaran nama baik pihak lain;
</p>
<p>
    7.3.9 Setiap penyalahgunaan barang yang sudah dibeli pihak Pengguna;
</p>
<p>
    7.3.10 Kerugian akibat pembayaran tidak resmi kepada pihak lain selain ke
    Rekening Resmi NIL, yang dengan cara apapun mengatas-namakan NIL ataupun
    kelalaian penulisan rekening dan/atau informasi lainnya dan/atau kelalaian
    pihak bank;
</p>
<p>
7.3.11 Virus atau perangkat lunak berbahaya lainnya (bot,<em>script, automation tool</em> selain fitur    <em>power merchant, hacking tool</em>) yang diperoleh dengan mengakses,
    atau menghubungkan ke layanan NIL;
</p>
<p>
    7.3.12 Gangguan, <em>bug</em>, kesalahan atau ketidakakuratan apapun dalam
    layanan NIL;
</p>
<p>
    7.3.13 Kerusakan pada perangkat keras <em>customer </em>dari penggunaan
    setiap layanan NIL;
</p>
<p>
    7.3.14 Isi, tindakan, atau tidak adanya tindakan dari Pihak manapun
    termasuk terkait dengan barang yang ada dalam situs NIL yang diduga palsu;
</p>
<p>
7.3.15 Tindak penegakan yang diambil sehubungan dengan akun    <em>customer</em>;
</p>
<p>
    7.3.16 Ketidaksesuaian barang yang diterima oleh <em>customer</em>;
</p>
<p>
    7.3.17 Adanya tindakan peretasan yang dilakukan oleh Pihak manapun kepada
akun <em>customer </em>dan/atau perangkat lunak NIL baik yang di    <em>website </em>dan/atau <em>mobile </em>aplikasi.
</p>
<h1>
    <strong>Pasal 8. Pelepasan</strong>
</h1>
<p>
Apabila <em>customer </em>memiliki perselisihan dengan Agen China dan/atau    <em>supplier </em>yang telah dipilih, maka <em>customer </em>melepaskan NIL
    (termasuk Induk Perusahaan, Direktur, dan karyawan) dari klaim dan tuntutan
    atas kerusakan dan kerugian (aktual dan tersirat) dari setiap jenis dan
    sifatnya, yang dikenal dan tidak dikenal, yang timbul dari atau dengan cara
    apapun berhubungan dengan sengketa tersebut, termasuk namun tidak terbatas
    pada kerugian yang timbul dari pembelian barang yang telah dilarang pada
Angka 2, 3, 4 dan 5 tentang Ketentuan Barang. Dengan demikian, maka    <em>customer </em>dengan sengaja melepaskan segala perlindungan hukum (yang
    terdapat dalam undang-undang atau peraturan hukum yang lain) yang akan
    membatasi cakupan ketentuan pelepasan ini.
</p>
<h1>
    <strong>Pasal 9. Ganti Rugi </strong>
</h1>
<p>
    <em>Customer </em>
    akan melepaskan NIL dari tuntutan ganti rugi dan <em>customer </em>secara
    sadar menjaga NIL (termasuk Induk Perusahaan, direktur, dan karyawan) dari
    setiap klaim atau tuntutan, termasuk biaya hukum yang wajar, yang dilakukan
    oleh Pihak manapun yang timbul dalam hal <em>customer </em>melanggar Syarat
    dan Ketentuan ini, Penggunaan layanan NIL yang tidak semestinya dan/atau
    pelanggaran <em>customer </em>terhadap hukum atau hak-hak Pihak manapun.
</p>
<h1>
    <strong>Pasal 10. Pilihan Hukum </strong>
</h1>
<p>
    Syarat dan Ketentuan ini akan diatur oleh dan ditafsirkan sesuai dengan
    hukum Republik Indonesia dan/dianggap sebagai sebuah Perjanjian yang
    mengikat antara NIL dan <em>customer</em>, tanpa memperhatikan pertentangan
    aturan hukum yang lain. <em>customer </em>setuju bahwa tindakan hukum
    apapun atau sengketa yang mungkin timbul dari, berhubungan dengan, atau
    berada dalam cara apapun berhubungan dengan situs dan/atau Syarat dan
    Ketentuan ini akan diselesaikan secara eksklusif dalam yurisdiksi
    Pengadilan Republik Indonesia.
</p>
<h1>
    <strong>Pasal 11. Tindakan Hukum </strong>
</h1>
<p>
Kami berhak mengajukan gugatan dan/atau tuntutan bilamana pihak<em>customer </em>dengan sengaja menyebarluaskan berita bohong,    <em>black campaign</em>, dan/atau tindakan lainnya yang dapat menyebabkan
    kerugian bagi pihak kami.
</p>
<h1>
    <strong>Pasal 12. Pembaharuan </strong>
</h1>
<p>
    Syarat dan Ketentuan ini mungkin diubah dan/atau diperbaharui dari waktu ke
waktu tanpa pemberitahuan sebelumnya. NIL menyarankan agar    <em>customer </em>membaca secara seksama dan memeriksa halaman Syarat dan
    Ketentuan ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan
    tetap mengakses dan menggunakan layanan NIL, maka dianggap menyetujui
    perubahan-perubahan dalam Syarat dan Ketentuan ini.
</p>
                                        </Typography>
                                        <Grid item xs={12}>
                                            <AuthAgremeent></AuthAgremeent>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </MainCard>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                
            </Grid>
        </Grid>
    </Box>
    );

}

export default Agreement;
