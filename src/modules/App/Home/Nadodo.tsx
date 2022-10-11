import { Box, Card, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch } from "react-redux";
import { gameState } from "../../../reducers/cryptolegions.reducer";
import { AppSelector } from "../../../store";
import { getTranslation } from "../../../utils/utils";
import {
  useBloodstone,
  useFeeHandler,
  useWeb3,
} from "../../../web3hooks/useContract";
import HomeTypo from "../../../components/UI/HomeTypo";
import LanguageTranslate from "../../../components/UI/LanguageTranslate";
import { getNadodoWatch } from "../../../helpers/basicInfo";

const NadodoWatch: React.FC = () => {
  // Hook Info
  const {
    language,
    marketplaceTax,
    huntTax,
    damageReduction,
    summonFee,
    suppliesFee14,
    suppliesFee28,
    buyTax,
    sellTax,
    rewardStatus,
    rewardDesc,
    reserveStatus,
    reserveDesc,
    liquidityStatus,
    liquidityDesc,
  } = AppSelector(gameState);
  const dispatch = useDispatch();

  // Account & Web3

  // Contracts
  const feehandlerContract = useFeeHandler();
  const bloodstoneContract = useBloodstone();

  // State

  // Functions
  const getBalance = async () => {
    // getNadodoWatch(dispatch, feehandlerContract, bloodstoneContract);
  };

  // UseEffect
  useEffect(() => {
    getBalance();
  }, []);

  return (
    <Card
      className="bg-c4"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ p: 4, justifyContent: "center" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            borderBottom: "1px solid #fff",
            marginBottom: 3,
          }}
        >
          <LanguageTranslate translateKey="nadodoWatching" />
        </Typography>
        <Box>
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="marketplaceTax" />:{" "}
              </>
            }
            info={marketplaceTax + "%"}
          />
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="huntTax" />:{" "}
              </>
            }
            info={huntTax + "%"}
          />
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="buyTax" />:{" "}
              </>
            }
            info={buyTax + "%"}
          />
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="sellTax" />:{" "}
              </>
            }
            info={sellTax + "%"}
          />
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="legionDamagePerHunt" />:{" "}
              </>
            }
            info={damageReduction + "%"}
          />
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="summoningFee" />:{" "}
              </>
            }
            info={"$" + summonFee}
          />
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="SuppliesFee14Hunts" />:{" "}
              </>
            }
            info={"$" + suppliesFee14}
          />
          <HomeTypo
            title={
              <>
                <LanguageTranslate translateKey="SuppliesFee28Hunts" />:{" "}
              </>
            }
            info={"$" + suppliesFee28}
          />
          <Typography
            className="fc1"
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LanguageTranslate translateKey="RewardPool" />
            :&nbsp;
            <CircleIcon
              sx={{ color: rewardStatus.valueOf(), fontSize: 16 }}
            />{" "}
            &nbsp;
            <span className="fc2">{rewardDesc}</span>
          </Typography>
          <Typography
            className="fc1"
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LanguageTranslate translateKey="ReservePool" />
            :&nbsp;
            <CircleIcon
              sx={{ color: reserveStatus.valueOf(), fontSize: 16 }}
            />{" "}
            &nbsp;
            <span className="fc2">{reserveDesc}</span>
          </Typography>
          <Typography
            className="fc1"
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LanguageTranslate translateKey="LiquidityPool" />
            :&nbsp;
            <CircleIcon
              sx={{ color: liquidityStatus.valueOf(), fontSize: 16 }}
            />{" "}
            &nbsp;
            <span className="fc2">{liquidityDesc}</span>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default NadodoWatch;
