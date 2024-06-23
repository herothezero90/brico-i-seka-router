import React from 'react';
import { Box, Text, Heading, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const ImageGallery = React.memo(({ images }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={4}
      mt={5}
    >
      {images.map((image, index) => (
        <MotionBox
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          overflow="hidden"
          borderRadius="md"
          position="relative"
          paddingBottom="75%" 
          mb={10} 
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </MotionBox>
      ))}
    </Grid>
  );
});

const About = () => {
  const images = [
    { src: "Images/Brico and Seka 1950.jpg", alt: "First image" },
    { src: "Images/Brico i Seka 6.jpg", alt: "Second image" },
    { src: "Images/Brico and Seka 1951.jpg", alt: "Third image" },
  ];

  return (
    <Box p={5} mt={2}>
      <MotionHeading
        size="4xl"
        color="teal.600"
        textAlign="center"
        fontFamily="Roper"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        mb={2}
      >
        Brico i Seka
      </MotionHeading>
      <Box
        p={4}
        color="orange.200"
        fontFamily="sans-serif"
        textAlign="justify"
        maxWidth="800px"
        mx="auto"
      >
        <Text>
          Frizerski salon „Brico i Seka“ najdugovječnija je brijačnica u Velikoj Gorici. Godine 1950. salon je otvorio Vinko Šimunković.
          – Tada su bile dvije brijačnice u Gorici. Jedna od njih je bila preko puta Gradske uprave. Držao ju je izvjesni Garešić, kod kojeg je moj tata radio. Garešićeva kći rodila je izvanbračno dijete kojeg je on htio izbaciti iz kuće. Moj je tata zgrabio dijete i zaštitio ga. Pod utjecajem alkohola, gazda Garešić mu je momentalno dao otkaz. Ujutro kad se otrijeznio, pozvao ga je natrag. Ali tvrdoglavi Šimunković je otišao i više se nije htio vratiti. Odlučio je otvoriti svoju brijačnicu – počinje tako priču Slava Noršić, djevojačkog prezimena Šimunković, koju u Gorici svi znaju kao Seku. Nitko tada nije slutio da je tim činom započela priča o najdugovječnijem frizerskom salonu u našem gradu, priča koja neprekidno traje već 71 godinu.
          – Ja sam 1970. završila zanat i tad su još bile britve na brušenje. Svaki slobodni trenutak remen u ruke i brusi britve. I ja završim zanat, a oni izmisle britvu sa žiletima. A gdje ste bili dvije godine prije… Ali ja bih ju i danas znala nabrusiti, što nisam sigurna da zna itko od mlađe generacije. Radili smo sa škarama i mehaničkim mašinicama, sve dok prijatelj moga tate nije donio prvu električnu mašinicu iz Njemačke.
        </Text>
      </Box>
      <ImageGallery images={images} />
      <Box /> 
    </Box>
  );
};

export default About;
