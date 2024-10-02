import { Box, Container, Flex, Grid, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import HeroImage from "../../public/logo-cerdasmemilih.svg";
import BackgroundImage from "../../public/background.svg";
import IconKuda from "../assets/horse.png";
import IconKujang from "../assets/kujang.png";
import { daerah } from "../pages/data/dataDumb";
import GambarBerita from "../assets/berita-1.png";
import GambarBerita2 from "../assets/berita-2.png";
import GambarBerita3 from "../assets/berita-3.png";
import GambarBerita4 from "../assets/berita-4.png";
import Icon from "../assets/arrow-right.svg";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const flex1Ref = useRef(null);
  const flex2Ref = useRef(null);
  const flex3Ref = useRef(null);

  // Check if each Flex is in view
  const isFlex1InView = useInView(flex1Ref, { once: true, amount: 0.5 });
  const isFlex2InView = useInView(flex2Ref, { once: true, amount: 0.5 });
  const isFlex3InView = useInView(flex3Ref, { once: true, amount: 0.5 });

  return (
    <div className="bg-primary-color overflow-x-hidden">
      <Section
        className="min-h-[91vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`, // Menambahkan gambar background
          backgroundSize: "cover", // Sesuaikan agar gambar mencakup seluruh section
          backgroundPosition: "center", // Menempatkan gambar di tengah
          backgroundRepeat: "no-repeat", // Mencegah pengulangan gambar
        }}
      >
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ delay: 0.6 }}>
            <Container className="flex flex-col items-center justify-center h-full">
              <Flex justify={"center"}>
                <Image src={HeroImage} width={600} height={600} alt="Hero Image" className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]" />
              </Flex>

              <Flex justify={"center"} className="mt-3">
                <Text as="div" size={{ initial: "3", md: "6", xl: "6" }} className="text-text-color font-bold px-10 md:px-72 text-center">
                  Kenali calon pemimpin daerahmu, pilih dengan cerdas untuk masa depan yang lebih baik
                </Text>
              </Flex>

              <Flex justify={"center"} gap={"4"} className="mt-8">
                <button className="bg-accent-color hover:bg-[#ff9b06e5] rounded-xl px-5 py-2.5 text-white font-bold">Mulai Memilih</button>
                <button className=" hover:bg-accent-color border border-accent-color rounded-xl px-5 text-text-color hover:text-white font-plus font-bold">Gabung Jadi Mitra</button>
              </Flex>
            </Container>
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* Section 2 */}
      <Section className="bg-secondary-color flex justify-center">
        <Container>
          <Grid columns={"1"} gap={"5"}>
            {/* Flex 1 */}
            <motion.div initial={{ opacity: 0, y: 15 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
              <Flex justify={"center"}>
                <Box className="text-center w-4/12 md:w-3/4">
                  <Text size={{ initial: "6", md: "8", xl: "8" }} className="text-center text-text-color-inverse font-bold">
                    Mengapa Memilih dengan Cerdas Itu Penting?
                  </Text>
                </Box>
              </Flex>
            </motion.div>

            {/* Flex 2 */}
            <motion.div initial={{ opacity: 0, y: 15 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
              <Flex justify={"center"}>
                <Box className="text-center w-4/12 md:w-3/4 px-4">
                  <Text size={"2"} className="text-center text-text-color-inverse font-normal">
                    Pemilihan umum adalah kesempatan bagi kita untuk menentukan masa depan daerah dan bangsa. Di <span className="font-bold">CerdasMemilih</span>, kami menyediakan informasi komprehensif mengenai calon pemimpin di Pemilihan
                    Kepala Daerah <span className="font-bold">Provinsi Jawa Barat</span> dan <span className="font-bold">Kabupaten Kuningan</span>. Dengan informasi yang jelas dan akurat, Anda bisa membuat keputusan yang lebih bijak dan
                    cerdas.
                  </Text>
                </Box>
              </Flex>
            </motion.div>
          </Grid>
        </Container>
      </Section>

      {/*Section 3*/}
      <Section>
        <Container>
          <Grid columns={"1"} gap={"4"}>
            {/* Flex 1 */}
            <motion.div ref={flex1Ref} initial={{ opacity: 0, y: 50 }} animate={isFlex1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <Flex justify={"center"}>
                <Text as="div" size={{ initial: "6", md: "8", xl: "8" }} className="text-center text-text-color font-bold">
                  Kenali Kandidat Lebih Dekat
                </Text>
              </Flex>
            </motion.div>

            {/* Flex 2 */}
            <motion.div ref={flex2Ref} initial={{ opacity: 0, y: 50 }} animate={isFlex2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <Flex justify={"center"}>
                <Box className="text-center w-3/4 md:w-6/12">
                  <Text size={{ initial: "2", md: "3", xl: "3" }} className="text-center text-secondary-text-color font-normal">
                    Setiap kandidat memiliki visi, misi, dan program kerja yang berbeda. Kenali mereka lebih dekat di sini.
                  </Text>
                </Box>
              </Flex>
            </motion.div>

            {/* Flex 3 (Box) */}
            <motion.div
              ref={flex3Ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isFlex3InView && isFlex1InView && isFlex2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <Flex justify={"center"} className="mt-14">
                <Grid columns={{ initial: "1", md: "2", xl: "2" }} gap={"6"}>
                  <Box className="bg-secondary-color min-h-fit w-64 md:w-56 rounded-2xl text-center shadow-lg">
                    <Flex justify={"center"} className="py-5">
                      <Image src={IconKujang} width={150} height={150} alt="Icon Kujang" />
                    </Flex>
                    <Text as="div" size={"2"} className="px-4 pb-5 text-text-color-inverse font-bold">
                      Kandidat Calon Gubernur & Wakil Gubernur Provinsi Jawa Barat
                    </Text>
                  </Box>

                  <Box className="bg-secondary-color min-h-fit w-64 md:w-56 rounded-2xl text-center shadow-lg">
                    <Flex justify={"center"} className="py-9">
                      <Image src={IconKuda} width={120} height={120} alt="Icon Kujang" />
                    </Flex>
                    <Text as="div" size={"2"} className="px-4 pb-5 text-text-color-inverse font-bold">
                      Kandidat Calon Bupati & Wakil Bupati Kab. Kuningan
                    </Text>
                  </Box>
                </Grid>
              </Flex>
            </motion.div>
          </Grid>
        </Container>
      </Section>

      {/* Section 4 */}
      <Section>
        <Container>
          <Grid columns={"1"} gap={"4"}>
            <motion.div initial={{ opacity: 0, y: 50 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
              <Flex justify={"center"}>
                <Text as="div" size={{ initial: "6", md: "8", xl: "8" }} className="text-center text-text-color font-bold">
                  Data Pemilih Tetap
                </Text>
              </Flex>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
              <Flex justify={"center"}>
                <Box className="text-center w-3/4 md:w-6/12">
                  <Text size={{ initial: "2", md: "3", xl: "3" }} className="text-center text-secondary-text-color font-normal">
                    Di Pemilu kali ini, partisipasi masyarakat sangat penting. Berikut adalah statistik terbaru jumlah pemilih tetap di beberapa daerah di Jawa Barat.
                  </Text>
                </Box>
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <Flex justify={"center"}>
                <button className="bg-accent-color hover:bg-[#ff9b06e5] rounded-xl px-5 py-2.5 text-white font-semibold text-sm">Lihat Semua Data Pemilih</button>
              </Flex>
            </motion.div>
            <Grid columns={{ initial: "3", md: "6", xl: "6" }} gap={"6"} className="mt-14 px-4">
              {daerah.map((dpt, index) => (
                <motion.div
                  key={index} // jangan lupa untuk menambahkan key setiap elemen
                  initial={{ opacity: 0, x: -50 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }} // tambahkan delay yang bergantung pada index
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <Box className="text-center">
                    <Text as="div" size={"3"} className="font-bold pb-2 text-text-color">
                      {dpt.title}
                    </Text>
                    <Text as="div" size={"3"} className="font-normal text-secondary-text-color">
                      {dpt.angka}
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Section 5 */}
      <Section>
        <Container>
          <Grid columns={"1"} gap={"4"}>
            <motion.div initial={{ opacity: 0, y: 50 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
              <Flex justify={"center"}>
                <Text as="div" size={{ initial: "6", md: "8", xl: "8" }} className="text-center text-text-color font-bold">
                  Edukasi Pilkada untuk Semua
                </Text>
              </Flex>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
              <Flex justify={"center"}>
                <Box className="text-center w-3/4 md:w-2/3">
                  <Text size={{ initial: "2", md: "3", xl: "3" }} className="text-center text-secondary-text-color font-normal">
                    Memahami proses pemilu adalah langkah pertama untuk berpartisipasi aktif dalam demokrasi. Baca artikel dan panduan kami yang mudah dipahami tentang pentingnya suara Anda dan bagaimana proses pemilihan berlangsung.
                  </Text>
                </Box>
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <Flex justify={"center"}>
                <button className="bg-accent-color hover:bg-[#ff9b06e5] rounded-xl px-5 py-2.5 text-white font-semibold text-sm">Lihat Semua Data Pemilih</button>
              </Flex>
            </motion.div>
            <Grid columns={{ initial: "1", md: "4", xl: "4" }} gap={"5"} className="mt-14 px-10">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.6, delay: 0 * 0.2 }} viewport={{ once: true }}>
                <Box className="w-fit">
                  <Image src={GambarBerita} width={500} height={100} alt="Berita" className="rounded-lg" />
                  <Text as="div" size={"3"} className="font-bold py-4 text-text-color">
                    Dedi Mulyadi Bicara Solusi Atasi Masalah Sampah di Jabar
                  </Text>
                  <a href="https://www.detik.com/jabar/pilkada/d-7566871/dedi-mulyadi-bicara-solusi-atasi-masalah-sampah-di-jabar" target="_blank" rel="noopener noreferrer">
                    <Flex align={"center"}>
                      <Text as="div" size={"3"} className="font-bold text-secondary-text-color">
                        Detik
                      </Text>
                      <Image src={Icon} width={30} height={30} alt="icon" />
                    </Flex>
                  </a>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }} // delay 0.2 detik untuk elemen kedua
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Box className="w-fit">
                  <Image src={GambarBerita2} width={500} height={100} alt="Berita" className="rounded-lg" />
                  <Text as="div" size={"3"} className="font-bold py-4 text-text-color">
                    KPU Jabar tetapkan 4 pasangan calon pada Pilkada 2024
                  </Text>
                  <a
                    href="https://jabar.antaranews.com/berita/545179/kpu-jabar-tetapkan-4-pasangan-calon-pada-pilkada-2024#:~:text=ANTARA/Ricky%20Prayoga.%20Bandung%20(ANTARA)%20-.%20Komisi%20Pemilihan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex align={"center"}>
                      <Text as="div" size={"3"} className="font-bold text-secondary-text-color">
                        Antara
                      </Text>
                      <Image src={Icon} width={30} height={30} alt="icon" />
                    </Flex>
                  </a>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 2 * 0.2 }} // delay 0.4 detik untuk elemen ketiga
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Box className="w-fit">
                  <Image src={GambarBerita3} width={500} height={100} alt="Berita" className="rounded-lg" />
                  <Text as="div" size={"3"} className="font-bold py-4 text-text-color">
                    PUI Tegaskan Dukung Ilham Habibie di Pilgub Jabar 2024
                  </Text>
                  <a
                    href="https://jabar.tribunnews.com/2024/09/23/pui-tegaskan-dukung-ilham-habibie-di-pilgub-jabar-2024#:~:text=TRIBUNJABAR.ID,%20MAJALENGKA%20-%20Persatuan%20Umat%20Islam%20(PUI)%20Jawa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex align={"center"}>
                      <Text as="div" size={"3"} className="font-bold text-secondary-text-color">
                        TeribunJabar
                      </Text>
                      <Image src={Icon} width={30} height={30} alt="icon" />
                    </Flex>
                  </a>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 3 * 0.2 }} // delay 0.6 detik untuk elemen keempat
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Box className="w-fit">
                  <Image src={GambarBerita4} width={500} height={100} alt="Berita" className="rounded-lg" />
                  <Text as="div" size={"3"} className="font-bold py-4 text-text-color">
                    Suasana Politik di Kuningan Masih &aposAdem&apos Jelang Kampanye Pilkada 2024, Tiga Paslon Siap Adu Visi Misi
                  </Text>
                  <a
                    href="https://www.pikiran-rakyat.com/news/pr-018601988/suasa-politik-di-kuningan-masih-adem-jelang-kampanye-pilkada-2024-tiga-paslon-siap-adu-visi-misi?page=all#:~:text=PIKIRAN%20RAKYAT%20-%20Menjelang%20tahapan%20kampanye%20Pemilihan%20Kepala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex align={"center"}>
                      <Text as="div" size={"3"} className="font-bold text-secondary-text-color">
                        PikiranRakyat
                      </Text>
                      <Image src={Icon} width={30} height={30} alt="icon" />
                    </Flex>
                  </a>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </div>
  );
}
