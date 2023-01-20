
import React from 'react';
import { 
      Box,
      IconButton,
      useBreakpointValue,
      Image,
      Flex,
      Grid,
 } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Footer from './Footer';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const mensData1 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/73be32ba-7db4-46a8-8cbd-ee11c356de701673520291749-image_jpeg_360595955.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/86e42d0c-690e-41c5-bf54-b200040f918d1673520309940-image_jpeg639032734.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/c5b1f986-923f-40f0-9f2f-7e53491d7a5b1673520333426-image_jpeg_1311032979.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/96dc9e41-9475-4cc2-9574-4e82951bfbf21673520353614-image_jpeg_2126156007.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/76b4b856-6475-4fa7-ae97-d8de576ef0d51672984200345-Top_casual_Styles-_Levi-s-_Tommy_Min_40.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/6edf9f37-af8d-46fc-b97a-03c5a3e6d1611672984200495-USPA-_FM_Min_60.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/623fea7c-e7c6-4b9f-921e-b56abb96f39c1672984199664-JJ-_Highlander_Min_65.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/46ca5fb8-cfe2-4db3-b1fb-77e41ef5d0d21672984199501-Gant-_Nautica_Min_50.jpg"
    },
    {
        id:10,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/bd2c7bfc-3673-4d21-ae0d-f9611d9c4bc91672984199677-JJ-_M-H_winter_specials_starting_699.jpg"
    }
]
 


const mensData2 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/c729d245-ddfd-4a87-8f78-e301a4f55a481672925100870-Louis_Philippe_1.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/61659bc8-ba41-4613-90ab-d565caef8a841672925101203-U.S._Polo_Assn..jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/e9663040-1f2b-46fa-bea8-eb6cebcbfec61672925100804-Jack_-_Jones.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/13105046-915d-4d79-8629-f97cfc93ed3c1672925100832-Levis.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/aace67e4-db94-4eb2-af19-869bf03a766c1672925100635-CK_Jeans.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/88224848-384e-41a6-b0fd-4b4441c1d6ba1672925101152-Tommy_Hilfiger_1.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/46dbeed1-d93a-4fad-b8a1-d5ad9da31b7d1672925101099-Skechers.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/31958000-39b6-42c9-a427-4019e358c4ab1672925100645-Crocs.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/97bd2aa7-1ab6-4611-8d10-64513eca45f21672925101285-USPA_Footwear.jpg"
    },
    {
        id:10,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/d584a0d0-6abd-441c-9ac6-581e36f2360a1672925100889-Mango_Man.jpg"
    }
]


const mensData3 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/905f956b-8f44-4cf5-bc3f-8a1176f0af641672983242447-Jeans..jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/71b5b436-ad16-4428-94e5-54678636ec051672983242175-Flip-Flops.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/e6ef9b71-7962-4d9b-b52e-bd78a49cc6a41672983242041-Casual-Shoes.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/af7cdf39-7ffa-407f-afd3-38f7546fda271672983242842-Sports-Shoes.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/5190651d-b648-4420-95f8-f2ee6883dd281672983243076-Trousers_.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/ae9788ec-c09f-466e-9a60-9b4985c9b6151672983242923-Sweatshirts_.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/a2cbd319-4a07-4ed2-9d64-a3e17331fe0b1672983242387-Jackets.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/0d8bc850-4264-441c-a7ee-dd6e3615ebe71672983242881-Sweaters.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/ef24f2b2-9fb5-4c08-9786-6350742fd0d31672984254612-Shirts.jpg"
    },
]



const mensData4 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/ae6d390f-f839-4ee7-8641-fc72557dab801672990786459-Flip-Flops.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/88ba4f19-0897-4a98-854d-7d448189995e1672990786481-Jackets.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/b414ce0f-0e89-4791-b506-ede21e1e96521672990786566-Sweatshirts.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/d4f4d461-99d5-450a-96f7-c8b3b863448e1672990786437-Casual-Shoes.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/c6476c3b-e53e-4f32-ad96-cb5de58b46361672990786547-Sports-Shoes.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/f1ec1bf5-c2c1-4bd0-bbe2-66defbdd9ef01672990786502-Jeans.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/76fb0dc3-3006-4f1c-821b-843f147520e11672990786524-Shirts.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/4bb149a9-8496-4e5c-b91a-20545debd71a1672990786584-T-Shirts.jpg"
    },
]




const mensWomenData = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/e988c7f2-ba2c-4689-9b16-4562fb2334b81673167109254-HP_Shop-By-Category_02.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/1a02b270-6967-4d29-9f45-15f72aebc66e1673167109264-HP_Shop-By-Category_03.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/0b2f02e5-d5b0-4c5a-90b0-8b277e5d4e9f1673167109275-HP_Shop-By-Category_04.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/b1866f27-9de8-462f-a93a-5202fbf38d221673167109285-HP_Shop-By-Category_05.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/8e0450b5-c63f-4e37-a773-8a065539f2c41673167109297-HP_Shop-By-Category_06.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/c6f948a1-a336-4dbd-9df5-802fa7bee0611673167109308-HP_Shop-By-Category_07.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/4c0055e3-e2bb-4cf7-9603-b44267bf0a851673167109320-HP_Shop-By-Category_08.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/74a4dd77-ed29-4f14-93f3-f7ff1cf22cb81673167109332-HP_Shop-By-Category_09.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/3dbe2f50-5ea3-41fa-b835-935e8e88dbed1673167109341-HP_Shop-By-Category_10.jpg"
    },
    {
        id:10,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/d19c0fce-61f1-4987-895a-8df5ece39e891673167109353-HP_Shop-By-Category_11.jpg"
    },
    {
        id:11,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/46bab40b-6e48-4350-8558-a0f24f597f521673167109363-HP_Shop-By-Category_12.jpg"
    },
    {
        id:12,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/605a0640-1b48-48c0-a569-d70058ff2e711673167109375-HP_Shop-By-Category_13.jpg"
    },
    {
        id:13,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/7bac00be-78c0-4f51-b4cc-2b785f9530981673167109386-HP_Shop-By-Category_14.jpg"
    },
    {
        id:14,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/edd7a1ed-bc37-4a33-b6ed-77354119d37f1673167109397-HP_Shop-By-Category_15.jpg"
    },
    {
        id:15,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/4aebae7d-cac9-4c31-9eaa-dc7bf50210751673167109406-HP_Shop-By-Category_16.jpg"
    },
    {
        id:16,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/b3c54352-88c3-43ef-9d24-77f59816238a1673167109417-HP_Shop-By-Category_17.jpg"
    },
    {
        id:17,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/6740e454-6e54-41f9-a971-86a1b1a166871673167109429-HP_Shop-By-Category_18.jpg"
    },
    {
        id:18,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/aa824a00-9f19-45d6-b114-6250b0d830771673167109439-HP_Shop-By-Category_19.jpg"
    },
    {
        id:19,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/71111ef0-5ab6-498c-b6cd-f2482e69f82a1673167109451-HP_Shop-By-Category_20.jpg"
    },
    {
        id:20,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/ee6014e4-97c5-4093-91b1-8c7623439dc71673167109464-HP_Shop-By-Category_21.jpg"
    },
    {
        id:21,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/5a565264-578c-4e20-bf14-5368569e2f391673167109474-HP_Shop-By-Category_22.jpg"
    },
    {
        id:22,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/9773c8f9-bd7f-49a9-8107-92a03dca81d11673167109484-HP_Shop-By-Category_23.jpg"
    },
    {
        id:23,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/d9ef7ba6-904b-460e-803b-42ed9014f3381673167109494-HP_Shop-By-Category_24.jpg"
    },
    {
        id:24,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/748c9cca-e4a4-478a-b3ae-79f5e4e943de1673167109504-HP_Shop-By-Category_25.jpg"
    },
    {
        id:25,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/798ccf46-4dfb-43b6-93cc-4337c5af39d61673167109513-HP_Shop-By-Category_26.jpg"
    },
    {
        id:26,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/a3074073-3525-46b7-8ef9-efcae8aab9801673167109522-HP_Shop-By-Category_27.jpg"
    },
    {
        id:27,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/0f49791b-49fb-45df-9e34-dd3567bd21e61673167109531-HP_Shop-By-Category_28.jpg"
    },
    {
        id:28,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/46f067c3-a4aa-44a9-9ed0-2587b012b37c1673167109540-HP_Shop-By-Category_29.jpg"
    },
    {
        id:29,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/6a4aea65-4774-4ae4-b775-3db3208631ce1673167109548-HP_Shop-By-Category_30.jpg"
    },
    {
        id:30,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/b0fde03d-e392-46dc-9a54-d5511853e9441673167109556-HP_Shop-By-Category_31.jpg"
    },
]




function Home(){

     {/* carausal */}
// As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://i.pinimg.com/originals/0b/46/ce/0b46ceb1581581d7ca5069c7120d269b.jpg',
    'https://i.pinimg.com/originals/01/95/82/01958236733281d8467cdf63484bfbed.png',
    'https://i.pinimg.com/originals/4f/57/47/4f57472c0f1f93776cbfbb7e63946ec3.png',
  ];
        {/* carausal end */}


    return(
        <>
        {/* carausal */}
        <Box
        margin={"auto"}
      position={'relative'}
      height={'500px'}
      width={'70%'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'4xl'}
            // position="relative"
            backgroundPosition="unset"
            backgroundRepeat="space"
            backgroundSize={"initial"}
            backgroundImage={`url(${url})`}
            
          />
        ))}
      </Slider>
    </Box>
        {/* carausal end */}


        {/* mid start */}

       
         <Image src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/3d8b5917-e115-425b-8c93-2c2e427f9d4f1673517461716-OMG-Deal--2-.jpg"/>
       
       <Flex w={"10%"}>
        {mensData1.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>

       <Flex w={"10%"}>
        {mensData1.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>

       <Image src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/e78ea5f5-8bcc-43e2-afce-529b95a166081673517538108-Grand-Brands.jpg"/>
       
       
       <Flex w={"10%"}>
        {mensData2.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>

       <Flex w={"10%"}>
        {mensData2.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>
       
        {/* mid end */}

        {/* bottom start */}

         <Image src="https://assets.myntassets.com/w_795,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/1c508dcd-ee9f-4485-81a5-71d97bf512e31673517538088-Brands-To-Bag.jpg"/>

         <Flex>
        {mensData3.map((el)=>{
            return(
                <Image src={el.src} w={"11.1%"}/>
            )
        })}
       </Flex>
       <Flex>
        {mensData3.map((el)=>{
            return(
                <Image src={el.src} w={"11.1%"}/>
            )
        })}
       </Flex>

       <Image src="https://assets.myntassets.com/w_795,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/2eb7efa2-1743-43b4-94c0-8b634d1be9af1673439896772-Budget-Buys--3-.jpg"/>
    
       <Flex>
        {mensData4.map((el)=>{
            return(
                <Image src={el.src} w={"12.5%"}/>
            )
        })}
       </Flex>
       <Flex>
        {mensData4.map((el)=>{
            return(
                <Image src={el.src} w={"12.5%"}/>
            )
        })}
       </Flex>

       <Image src="https://assets.myntassets.com/w_795,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/ba62da25-d69a-441f-a639-4bd08534f3451673416953973-Shop-By-Category--2-.jpg"/>
       

        <Grid
             
             templateRows='repeat(5, 1fr)'
             templateColumns='repeat(6, 1fr)'
             >
         {mensWomenData.map((el)=>{
            return(
                <Image src={el.src} />
            )
         })}
      </Grid>


        {/* bottom end */}

        {/* footer */}

         <Footer/>

        {/* footer end */}

    </>
    ) 
}

export default Home;


	