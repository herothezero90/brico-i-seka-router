import React from 'react';
import { Box, Text, Image, Flex, Center } from '@chakra-ui/react';

const ImageTextBox = ({ imageSrc, altText, children }) => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'column', lg: 'row' }} 
      justify="space-between" 
      alignItems="center" 
      p={4} 
      boxShadow="md" 
      borderRadius="md" 
      mb={6} 
    >
      <Box w={['80%', '50%', '30%']} mb={{ base: 4, md: 0 }}>
        <Image
          src={imageSrc}
          alt={altText}
          width="100%"
          height="auto"
          objectFit="cover"
          borderRadius="md" 
        />
      </Box>
      <Box w={['100%', '50%', '65%']}> 
        {children} 
      </Box>
    </Flex>
  );
};

const About = () => {
  return (
    <>
        <Image 
          src='Images/Seka Cropped.svg' 
          alt='Brico i seka logo' 
          width="80%"
          height="20%"
          objectFit="cover"
          />
      <ImageTextBox
        imageSrc="Images/Brico i Seka 6 copy.jpg"
        altText="Second image"
      >
        <Text
          color="yellow.500"
          fontFamily="Merriweather"
          textAlign="justify"
        >
          Frizerski salon „Brico i Seka“ najdugovječnija je brijačnica u Velikoj Gorici. Godine 1950. salon je otvorio Vinko Šimunković.
          – Tada su bile dvije brijačnice u Gorici. Jedna od njih je bila preko puta Gradske uprave. Držao ju je izvjesni Garešić, kod kojeg je moj tata radio. Garešićeva kći rodila je izvanbračno dijete kojeg je on htio izbaciti iz kuće. Moj je tata zgrabio dijete i zaštitio ga. Pod utjecajem alkohola, gazda Garešić mu je momentalno dao otkaz. Ujutro kad se otrijeznio, pozvao ga je natrag. Ali tvrdoglavi Šimunković je otišao i više se nije htio vratiti. Odlučio je otvoriti svoju brijačnicu – počinje tako priču Slava Noršić, djevojačkog prezimena Šimunković, koju u Gorici svi znaju kao Seku. Nitko tada nije slutio da je tim činom započela priča o najdugovječnijem frizerskom salonu u našem gradu, priča koja neprekidno traje već 71 godinu.
          – Ja sam 1970. završila zanat i tad su još bile britve na brušenje. Svaki slobodni trenutak remen u ruke i brusi britve. I ja završim zanat, a oni izmisle britvu sa žiletima. A gdje ste bili dvije godine prije… Ali ja bih ju i danas znala nabrusiti, što nisam sigurna da zna itko od mlađe generacije. Radili smo sa škarama i mehaničkim mašinicama, sve dok prijatelj moga tate nije donio prvu električnu mašinicu iz Njemačke.
        </Text>
      </ImageTextBox>
    </>
  );
};

export default About;
