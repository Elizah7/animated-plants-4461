import React, { useEffect, useState } from "react";
import styles from "./CartPayment.module.css";
import logoicon from "../pictures/logoicon.png";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio";
import {Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import usergetdataaction from "../Redux/Auth/UserSignup/usergetdataaction";
import axios from "axios";
import Footer from "../VPages/Footer"
import { getCartData } from "../Redux/Cartrr/cartaction";

const FinalPayment = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [selectedPaymentMode, setSelectedPaymentMode] = useState("Cash on delivery");
  const cartData = useSelector(store => store.getcartreducer.data)
  const totalmrp = cartData && cartData.Data && cartData.Data.reduce((ac, i) => ac + Number(i.off_price)*Number(i.count), 0);
  const totaloff = cartData && cartData.Data && cartData.Data.reduce((ac, i) => ac + Number(i.price)*Number(i.count), 0);
  console.log(totaloff);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData())
  }, []);



  const handleclickhome = () => {
    localStorage.setItem("cartData", JSON.stringify([]));
    toast({
      title: "Order Placed successfully",
      description: "Delivery estimates within 2 days",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    navigate("/");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Step 3: Create the modal component with form elements
  const CreditDebitCardModal = () => {

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Card Details</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleclickhome}>
          <ModalBody>
            <Stack spacing={3}>
              <Input placeholder="Card Number" required/>
              <Input placeholder="Expiry Date" required />
              <Input placeholder="PIN Number"  required/>
              <Input placeholder="Address"  required/>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Input type="submit" backgroundColor="green" color="white"/>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    );
  };

  // Step 4: Handle the behavior when the user selects "Credit/Debit Card" and open the modal
  const handleCreditDebitCardSelected = () => {
    onOpen(); // This will open the modal when the user selects "Credit/Debit Card"
  };

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.container}>
          <div className={styles.logodiv}>
            <img src={logoicon} alt="" />
          </div>
          <div className={styles.threeroutes}>
            <span>BAG ----------</span>
            <span>ADDRESS ----------</span>
            <span>PAYMENT</span>
          </div>
          <div className={styles.secure}>
            <img
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
              alt="pic"
              height="30px"
            />
            100% S E C U R E
          </div>
        </div>
        <div className={styles.bagbody}>
          <div className={styles.twosections}>
            {/*-------------- left section start----------------------*/}
            <div className={styles.leftdiv}>
              <div className={styles.add_details}>
                <h1>Select Payment Mode</h1>
              </div>
              <div>
                <Stack>
                <div>
                <div>Cash on delivery</div>
                <div>PhonePay/Googlepay/BhimUpi</div>
                <div onClick={handleCreditDebitCardSelected}>Credit/Debit Card</div>
                <div>Paytm/Wallets</div>
                <div>Net Banking</div>
                <div>EMI/ PayLater</div>
              </div>
                </Stack>
              </div>
            </div>
            {/*-------------- left section end----------------------*/}

            {/*-------------- right section start----------------------*/}

            <div className={styles.rightdiv}></div>
            {/*-------------- right section end----------------------*/}
            <div>
              <hr />
              <div className={styles.gifthead}>
                <p>
                  {" "}
                  <b> PRICE DETAILS</b>
                </p>
              </div>
              <div className={styles.gifthead}>
                <table>
                  <tr>
                    <td>Total MRP</td>
                    <td>₹{totalmrp}</td>
                  </tr>
                  <tr>
                    <td>Discount on MRP</td>
                    <td>₹{totalmrp - totaloff}</td>
                  </tr>
                  <hr />
                  <tr>
                    <td>Total Amount</td>
                    <td>₹{totaloff}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreditDebitCardModal/>
      <Box>
        <Footer/>
      </Box>
    </>
  );
};

export default FinalPayment;
