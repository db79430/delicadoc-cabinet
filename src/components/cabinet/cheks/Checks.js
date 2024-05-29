import {Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {setUserInfo, setUserToken} from "../../../redux/action/action";
import {useDispatch, useSelector} from "react-redux";
import {checksUser} from "../../../redux/function/function-service";

export const Checks = ({token}) => {
    const cheks = useSelector(state => state.infoPromo.checks);
    const dispatch = useDispatch();
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        dispatch(checksUser(token))
    }, [dispatch]);

    return (
        <>
            <div className="table-container">
                <Table className="table-prizes">
                    <thead className="thead">
                    <tr className="title-table">
                        <th className="title-name-checks">Дата</th>
                        <th className="title-name-checks">Номер чека</th>
                        <th className="title-name-checks">Статус</th>
                    </tr>
                    </thead>
                    <tbody className="table-body">
                    {currentData.map((user, index) => (
                        <tr key={index}>
                            <td className="table-name">
                                <img/>
                            </td>
                            <td className="table-name">{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}