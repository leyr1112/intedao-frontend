import { useState, useEffect } from "react";
import { addresses, TOKEN_DECIMALS } from "../../constants";
import { Link, SvgIcon, Popper, Button, Paper, Typography, Divider, Box, Fade, Slide } from "@material-ui/core";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-fill.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as sInteTokenImg } from "../../assets/tokens/SINTE.svg";
import { ReactComponent as InteTokenImg } from "../../assets/tokens/INTE.svg";

import "./intemenu.scss";
import { usdt } from "src/helpers/AllBonds";
import { useWeb3Context } from "../../hooks/web3Context";

import InteImg from "src/assets/tokens/INTE.svg";
import SInteImg from "src/assets/tokens/SINTE.svg";

const addTokenToWallet = (tokenSymbol, tokenAddress) => async () => {
  if (window.ethereum) {
    const host = window.location.origin;
    // NOTE (appleseed): 33T token defaults to sINTE logo since we don't have a 33T logo yet
    let tokenPath;
    // if (tokenSymbol === "INTE") {

    // } ? InteImg : SInteImg;
    switch (tokenSymbol) {
      case "INTE":
        tokenPath = InteImg;
        break;
      default:
        tokenPath = SInteImg;
    }
    const imageURL = `${host}/${tokenPath}`;

    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: TOKEN_DECIMALS,
            image: imageURL,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

function InteMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isEthereumAPIAvailable = window.ethereum;
  const { chainID } = useWeb3Context();

  const networkID = chainID;

  const SINTE_ADDRESS = addresses[networkID].SINTE_ADDRESS;
  const INTE_ADDRESS = addresses[networkID].INTE_ADDRESS;
  const USDC_ADDRESS = addresses[networkID].USDC_ADDRESS;

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = "inte-popper";
  const usdtAddress = usdt.getAddressForReserve(networkID);
  return (
    <Box
      component="div"
      onMouseEnter={e => handleClick(e)}
      onMouseLeave={e => handleClick(e)}
      id="inte-menu-button-hover"
    >
      <Button id="inte-menu-button" size="large" variant="contained" color="secondary" title="INTE" aria-describedby={id}>
        <SvgIcon component={InfoIcon} color="primary" />
        <Typography>INTE</Typography>
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => {
          return (
            <Fade {...TransitionProps} timeout={100}>
              <Paper className="inte-menu" elevation={1}>
                <Box component="div" className="buy-tokens">
                  <Link
                    href={`https://spookyswap.finance/swap?inputCurrency=${usdtAddress}&outputCurrency=${INTE_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="large" variant="contained" color="secondary" fullWidth>
                      <Typography align="left">
                        Buy on SpookySwap <SvgIcon component={ArrowUpIcon} htmlColor="#A3A3A3" />
                      </Typography>
                    </Button>
                  </Link>

                  <Link
                    href={`https://swap.spiritswap.finance/#/add/${USDC_ADDRESS}/${INTE_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="large" variant="contained" color="secondary" fullWidth>
                      <Typography align="left">
                        Buy on SpiritSwap <SvgIcon component={ArrowUpIcon} htmlColor="#A3A3A3" />
                      </Typography>
                    </Button>
                  </Link>
                </Box>

                {isEthereumAPIAvailable ? (
                  <Box className="add-tokens">
                    <Divider color="secondary" />
                    <p>ADD TOKEN TO WALLET</p>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("INTE", INTE_ADDRESS)}>
                        <SvgIcon
                          component={InteTokenImg}
                          viewBox="0 0 1500 1500"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">INTE</Typography>
                      </Button>
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("sINTE", SINTE_ADDRESS)}>
                        <SvgIcon
                          component={sInteTokenImg}
                          viewBox="0 0 1500 1500"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">sINTE</Typography>
                      </Button>
                    </Box>
                  </Box>
                ) : null}
              </Paper>
            </Fade>
          );
        }}
      </Popper>
    </Box>
  );
}

export default InteMenu;
