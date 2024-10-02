import {Link, Navigate, Route, Routes} from "react-router-dom";
import routes from "./routes";
import {Button, Collapse, Nav, Navbar, NavbarToggler} from "reactstrap";
import React, {useEffect, useState} from "react";
import scsgLogo from "./assets/images/scsg-logo.png";
import Web3 from "web3";

export default function App(props) {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    useEffect(() => {
        // Check if browser is running Metamask
        firstRender().then(result => {
            setWeb3(result);
            checkConnection(result).then(r => {
            });
        });

    }, []);
    const firstRender = async () => {
        let _web3;
        if (window.ethereum) {
            // on testing, connect to Goerli node
            _web3 = new Web3(window.ethereum);
            _web3.eth.getAccounts().then(_accounts => 
            // _web3 = new Web3(window.ethereum);
            let _account = await _web3.eth.getAccounts();
            if (_account.length > 0) {
                setAccount(_account[0]);
            }
            
            return _web3;
        } else if (window.web3) {
            _web3 = new Web3(window.web3.currentProvider);
            return _web3
        } else {
            _web3 = new Web3('https://goerli.infura.io/v3/49acd009b2724fe08302dc2aa4cccb01');
            return _web3
        }
    }
    const checkConnection = async (_web3) => {
        try {
            const networkId = await window.ethereum.request({
                method: "net_version",
            });
            // Check if User is already connected by retrieving the accounts
            const accounts = await _web3.eth.getAccounts();
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            }
            listener();
            // if (Number(networkId) !== 5) {
            //     setAccount(null);
            // }
        } catch (e) {
            
        }
    }
    const listener = () => {
        // Add listeners
        window.ethereum.on("accountsChanged", async (accounts) => {
            setAccount(accounts[0])
            
        });
        window.ethereum.on("chainChanged", async () => {
            window.location.reload();
        });
    }
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                const networkId = await window.ethereum.request({
                    method: "net_version",
                });
                // if (Number(networkId) === 5) {
                setAccount(accounts[0]);
                // } else {
                //     
                // }
            } catch (err) {
                
                // setError("Something went wrong.");
            }
        } else {
            
            window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en', '_blank');
        }
    }
    const getRoutes = (routes) => {
        return routes.map((route, key) => {
            return (
                <Route
                    exact
                    key={key}
                    path={route.layout + route.path}
                    name={route.name}
                    element={<route.component {...props} account={account} web3={web3}/>}
                />
            );
        });
    };
    return (
        <>
            <Navbar container="fluid" fixed="top" dark expand="lg" color="dark" className="pb-0 mb-0 bg-transparent">
                <Link to="/home">
                    <img
                        alt="SCS Games"
                        src={scsgLogo}
                        style={{
                            height: 60,
                            width: "auto"
                        }}
                    />
                </Link>
                <NavbarToggler onClick={toggleNavbar}/>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="me-auto" navbar>
                    </Nav>
                    {
                        account ? <>
                            <Button color="secondary">
                                {account.substring(0, 7) + '...' + account.substring(account.length - 5, account.length)}
                            </Button>
                            {/*<UncontrolledDropdown nav inNavbar>*/}
                            {/*    <DropdownToggle nav className="text-white">*/}
                            {/*        <span className="me-2 btn btn-secondary ">*/}
                            {/*            {account.substring(0, 7) + '...' + account.substring(account.length - 5, account.length)}*/}
                            {/*        </span>*/}
                            {/*    </DropdownToggle>*/}
                            {/*</UncontrolledDropdown>*/}
                        </> : <>
                            <Button color="secondary" onClick={connectWallet}>
                                Connect Wallet
                            </Button>
                        </>
                    }
                </Collapse>
            </Navbar>
            <div className="hero h-100">
                <Routes>
                    {getRoutes(routes)}
                    <Route path="/*" element={<Navigate to="/home"/>}/>
                </Routes>
            </div>
        </>
    );
}
