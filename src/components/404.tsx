import { Container, Flex, Section } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import NotFound from "../assets/Group 2.svg";

export const PageNotFound = () => {
  return (
    <div className="bg-primary-color min-h-[92vh]">
      <Section>
        <Container>
          <Flex justify={"center"} align={"center"} className="pt-28">
            <Image src={NotFound} alt="Page Not Found" className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]" />
          </Flex>
        </Container>
      </Section>
    </div>
  );
};
