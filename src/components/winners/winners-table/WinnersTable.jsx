import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getInfoPromoUsers} from "../../../redux/function/function-service";
import { Table, Pagination } from 'react-bootstrap';
import "./WinnersTable.css"


export const WinnersTable = () => {
    const dispatch = useDispatch();
    const promoUsers = useSelector((state) => state.infoPromo.promoUsers || []);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        if (!promoUsers.length) {
            dispatch(getInfoPromoUsers());
        }
    }, [dispatch, promoUsers.length]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentData(promoUsers.slice(startIndex, endIndex));
    }, [currentPage, promoUsers]);

    const totalPages = Math.ceil(promoUsers.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="table-container">
            <Table className="table-prizes">
                <thead className="thead">
                <tr className="title-table">
                    <th className="title-name">Имя</th>
                    <th className="title-name">Телефон</th>
                    <th className="title-name">Дата</th>
                    <th className="title-name">Торговая сеть</th>
                    <th className="title-name">Приз</th>
                </tr>
                </thead>
                <tbody className="table-body">
                    {currentData.map((user, index) => (
                        <tr key={index}>
                            <td className="table-name">{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.date}</td>
                            <td>{user.shop_img}</td>
                            <td>{user.image_gift && <img src={user.image_gift} alt="Приз" style={{ width: '50px', height: '50px' }} />}
                                {user.name_gift}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/*<Pagination>*/}
            {/*    <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />*/}
            {/*    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />*/}
            {/*    {[...Array(totalPages).keys()].map((number) => (*/}
            {/*        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>*/}
            {/*            {number + 1}*/}
            {/*        </Pagination.Item>*/}
            {/*    ))}*/}
            {/*    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />*/}
            {/*    <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />*/}
            {/*</Pagination>*/}
        </div>
    );
};