// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol"; //"@superfluid-finance/ethereum-monorepo/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import {IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import {CFAv1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFAv1Library.sol";

import { ISuperfluidToken } from "@superfluid-finance/ethereum-contracts/contracts/superfluid/SuperfluidToken.sol";

contract DynamicNFTServicePayment {
    using CFAv1Library for CFAv1Library.InitData;

    address _receiver_address;

    ISuperfluidToken token;

    //initialize cfaV1 variable
    CFAv1Library.InitData public cfaV1;

    constructor (ISuperfluid host) {
        //initialize InitData struct, and set equal to cfaV1
        cfaV1 = CFAv1Library.InitData(
            host,
            //here, we are deriving the address of the CFA using the host contract
            IConstantFlowAgreementV1(
                address(
                    host.getAgreementClass(
                        keccak256(
                            "org.superfluid-finance.agreements.ConstantFlowAgreement.v1"
                        )
                    )
                )
            )
        );
    }

    function startPayment() public {
        cfaV1.createFlow(payable(_receiver_address), token, flowRate, userData);
    }

    function updatePayment() public {
        cfaV1.createFlow(payable(_receiver_address), token, flowRate, userData);
    }

    function stopPayment() public {
        cfaV1.createFlow(payable(_receiver_address), token, flowRate, userData);
    }

    function checkIfFlowActive (address sender) public returns (bool){
        (flowOperatorId, permissions, flowRateAllowance) = cfaV1.getFlowOperatorData(
            token,
            sender,
            _receiver_address
        );
    }
}
