import { Card } from "@chakra-ui/react";

interface PaymentCardProps {
  paymentMethod: string;
  icon: string;
}

function PaymentCard({ paymentMethod, icon }: PaymentCardProps) {
  return (
    <Card
      width={"200px"}
      height={"60px"}
      border="1px solid #c2c2c2"
      color="#c2c2c2"
      cursor={"pointer"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      _hover={{
        color: "#858585",
        borderColor: "#858585",
        backgroundColor: "#f8f8f8",
        transition: "ease-in 0.3s",
      }}
    >
      {paymentMethod}
    </Card>
  );
}

export default PaymentCard;
