import { Box, Container, Flex, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import Logo from "../../public/logo-cerdasmemilih-invers.svg";

const FooterComponents = () => {
  return (
    <div>
      <Section className="bg-secondary-color">
        <Container>
          <Image src={Logo} width={200} height={200} alt="Logo CerdasMemilih Invers" className="mx-10" />
          <hr className="my-4 border-t border-text-color-inverse" />

          <Flex
            direction={{ initial: "column", md: "row", xl: "row" }} // Ubah arah pada ukuran tablet dan mobile
            justify={"between"}
            gap={"4"}
            className="mx-10"
          >
            <Box className="w-full md:w-2/4">
              <Text as="div" size={"1"} className="text-text-color-inverse font-normal">
                <span className="font-bold">CerdasMemilih </span>adalah sebuah platform independen yang tidak terafiliasi dengan kandidat maupun partai politik manapun. Kami hadir untuk memberikan informasi yang objektif dan akurat,
                sehingga Anda dapat membuat pilihan yang cerdas dalam Pilkada.
              </Text>
            </Box>
            <Text as="div" size={"1"} className="text-text-color-inverse">
              Copyright © 2024 CerdasMemilih. All rights reserved.
            </Text>
          </Flex>
        </Container>
      </Section>
    </div>
  );
};

export default FooterComponents;
