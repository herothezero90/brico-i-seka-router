import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <>
    <Box w={[300, 400, 500]}>
    <Image 
        src='Images/Brico i Seka 6 copy.jpg' 
        alt="Brico main image"
        width="100%"
        height="400px"
        objectFit="cover"
        borderRadius="md"
        mt={{ base: 6, md: 8 }}
      />
    </Box>
    <Box
      p={4}
      bgColor="yellow.500"
      borderRadius="md"
      maxW={{ base: '90%', md: '80%', lg: '70%' }}
      m="auto"
      mt={{ base: 6, md: 8 }}
      overflow="auto"
      maxHeight="80vh" 
    >
      <Text 
      color="black"
      fontFamily={ "Merriweather"}>
        Frizerski salon „Brico i Seka“ najdugovječnija je brijačnica u Velikoj Gorici. Godine 1950. salon je otvorio Vinko Šimunković.
        – Tada su bile dvije brijačnice u Gorici. Jedna od njih je bila preko puta Gradske uprave. Držao ju je izvjesni Garešić, kod kojeg je moj tata radio. Garešićeva kći rodila je izvanbračno dijete kojeg je on htio izbaciti iz kuće. Moj je tata zgrabio dijete i zaštitio ga. Pod utjecajem alkohola, gazda Garešić mu je momentalno dao otkaz. Ujutro kad se otrijeznio, pozvao ga je natrag. Ali tvrdoglavi Šimunković je otišao i više se nije htio vratiti. Odlučio je otvoriti svoju brijačnicu – počinje tako priču Slava Noršić, djevojačkog prezimena Šimunković, koju u Gorici svi znaju kao Seku. Nitko tada nije slutio da je tim činom započela priča o najdugovječnijem frizerskom salonu u našem gradu, priča koja neprekidno traje već 71 godinu.
        – Ja sam 1970. završila zanat i tad su još bile britve na brušenje. Svaki slobodni trenutak remen u ruke i brusi britve. I ja završim zanat, a oni izmisle britvu sa žiletima. A gdje ste bili dvije godine prije… Ali ja bih ju i danas znala nabrusiti, što nisam sigurna da zna itko od mlađe generacije. Radili smo sa škarama i mehaničkim mašinicama, sve dok prijatelj moga tate nije donio prvu električnu mašinicu iz Njemačke.
      </Text>
    </Box>
    </>
    
  );
};

export default About;
