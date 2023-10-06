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
    >
      {paymentMethod}
    </Card>
  );
}

export default PaymentCard;
