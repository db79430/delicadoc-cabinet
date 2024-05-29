import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checksUser } from "../../../redux/function/function-service";
import "./Checks.css"
import styled from 'styled-components';
import {setChecks} from "../../../redux/action/action";
import "./Checks.css"

export const ChecksNew = ({ token }) => {
    const checks = useSelector(state => state.infoPromo.checks);
    const dispatch = useDispatch();
    const [currentData, setCurrentData] = useState([]);

    console.log('checks', checks)

    useEffect(() => {
        dispatch(checksUser(token));

    }, [dispatch]);

    useEffect(() => {
        if (Array.isArray(checks)) {
            setCurrentData(checks);
        } else {
            setCurrentData([]);
        }
    }, [checks]);

    return (
        <TableContainer>
            <thead>
            <TableRow>
                <TableHeader className="date">Дата</TableHeader>
                <TableHeader className="number-checks">Номер чека</TableHeader>
                <TableHeader className="status">Статус</TableHeader>
            </TableRow>
            </thead>
            <StyledTable>
                <tbody>
                {currentData.map((check, index) => (
                    <TableRow key={index}>
                        <TableCell><img src={check.image} alt="" /></TableCell>
                        <TableCell>{check.date}</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{check.name_status}</TableCell>
                    </TableRow>
                ))}
                </tbody>
            </StyledTable>
        </TableContainer>
    );
};

const TableContainer = styled.div`
  margin: 20px 0;
`;

const StyledTable = styled.table`
  width: 90%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0px 30px 30px 30px;
  @media (max-width: 430px) {
    display: block;
    thead, tbody, th, td, tr {
      display: block;
    }

    thead tr {
      position: absolute;
    }

    tr {
      margin: 0 0 1rem 0;
    }

    td {
      border: none;
      position: relative;
      padding-left: 50%;
      white-space: nowrap;
      text-align: left;
    }

    td:before {
      position: absolute;
      top: 0;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      content: attr(data-label);
      text-align: left;
      font-weight: bold;
    }
  }
`;

const TableRow = styled.tr`
  flex-direction: row;
  justify-content: space-between;
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

const TableHeader = styled.th`
  padding: 22px;
  color: white;
  text-align: center;
  @media (max-width: 430px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

const TableCell = styled.td`
    padding: 12px;
    text-align: left;
    @media (max-width: 430px) {
        display: block;
        text-align: right;
        border-bottom: none;
        position: relative;
        padding-left: 50%;
        &:before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            width: 50%;
            padding-right: 10px;
            white-space: nowrap;
            text-align: left;
            font-weight: bold;
        }
    }
`;
