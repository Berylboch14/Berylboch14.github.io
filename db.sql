CREATE DATABASE blog_database;

USE blog_database;

CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    alt_text VARCHAR(255) NOT NULL
);

INSERT INTO blog_posts (title, image, content, alt_text) VALUES
('Perkembangan Komputasi Kuantum: Loncatan Menuju Daya Komputasi Luar Biasa', 'image/OIP (1).jpeg', 'Artikel ini mengeksplorasi kemajuan terbaru dalam bidang komputasi kuantum, dengan menyoroti potensi kemajuan tersebut untuk merevolusi berbagai industri. Komputasi kuantum menjanjikan untuk menyelesaikan masalah kompleks secara eksponensial lebih cepat daripada komputer klasik dengan memanfaatkan prinsip-prinsip mekanika kuantum. Peneliti telah membuat kemajuan signifikan dalam membangun qubit yang lebih stabil, unit dasar pemrosesan informasi kuantum, membuka jalan bagi komputer kuantum yang praktis. Artikel ini membahas aplikasi potensial seperti penemuan obat, kriptografi, dan masalah optimisasi.', 'Perkembangan Komputasi Kuantum'),
('Munculnya Terapi Realitas Virtual: Transformasi Pengobatan Kesehatan Mental', 'image/download (2).jpeg', 'Teknologi realitas virtual (VR) semakin banyak digunakan sebagai alat terapeutik untuk mengobati berbagai gangguan kesehatan mental. Artikel ini mengkaji tren berkembangnya terapi VR dan manfaat potensialnya. Terapi VR menyediakan lingkungan yang aman dan imersif bagi pasien untuk menghadapi dan mengatasi ketakutan, trauma, dan kecemasan mereka. Mulai dari pengobatan fobia hingga terapi PTSD, simulasi VR menawarkan pengaturan yang terkontrol untuk terapi paparan, memungkinkan terapis untuk menyesuaikan pengalaman dengan kebutuhan individu. Artikel ini juga membahas penelitian yang sedang berlangsung dan tantangan dalam menerapkan terapi VR dalam skala yang lebih luas.', 'Munculnya Terapi Realitas Virtual'),
('Menjelajahi Implikasi Etis Kecerdasan Buatan Umum (AGI)', 'image/download (1).jpeg', 'Saat sistem kecerdasan buatan (AI) semakin maju, diskusi seputar pengembangan Kecerdasan Buatan Umum (AGI) menimbulkan pertanyaan etis penting. Artikel ini membahas implikasi potensial pencapaian AGI, sistem AI hipotetis dengan kemampuan kognitif umum yang sebanding dengan manusia. Keprihatinan etis meliputi masalah kontrol, keamanan, dan akuntabilitas, serta dampak sosial seperti penggusuran pekerjaan dan ketidaksetaraan. Artikel ini menyoroti perlunya kerangka kerja etis dan mekanisme tata kelola yang kuat untuk memastikan bahwa pengembangan AGI mengutamakan kesejahteraan manusia dan sejalan dengan nilai-nilai masyarakat.', 'Menjelajahi Implikasi Etis Kecerdasan Buatan Umum (AGI)');
