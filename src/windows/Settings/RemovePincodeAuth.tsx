import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useStoreActions } from "../../state/store";
import Pincode from "../../components/Pincode";

export default function RemovePincodeAuth() {
  const navigation = useNavigation();
  const removePincode = useStoreActions((store) => store.security.removePincode);

  const onTryCode = async (code: string) => {
    if (await removePincode(code)) {
      setTimeout(() => navigation.goBack(), 0);
      return true;
    }
    return false;
  }

  return (
    <>
      <Pincode onTryCode={onTryCode} textAction="Enter current pincode to remove pincode" />
    </>
  )
}
