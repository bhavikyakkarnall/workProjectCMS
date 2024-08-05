import { useEffect, useState } from "react"
import ItemsService from "../services/items-service";
import ItemFilter from "./ItemFilter";

const itemsService = new ItemsService('http://localhost:3000');

export default function ItemsList() {

    const [allItems, setAllItems] = useState([]);
    const [items, setItems] = useState([]);
    const [cs, setCS] = useState([]);


    useEffect(
        () => {
            itemsService.getItem()
                .then(itemsJsonData => {
                    setItems(itemsJsonData);
                    setAllItems(itemsJsonData);
                })
                .catch(error => {
                    setErrorMessage("SERVER DOWN! Unable to connect to server. Please try again later.")
                })
        },
        []
    );

    const getUniqueCompanyList = function(items) {
        const allCompanyList = items.map(item => item.company);
        const uniqueCompanyList = [...new Set(allCompanyList)];
        return uniqueCompanyList;
    }

    const getUniqueTechList = function(items) {
        const allTechList = items.map(item => item.tech);
        const uniqueTechList = [...new Set(allTechList)];
        return uniqueTechList;
    }

    const applyFilter = function(cs, serial, company, tech){
        let filteredItems = allItems.filter(item =>
            item.cs.includes(cs) &&
            item.serial.includes(serial) &&
            item.company.toLowerCase().include(company.toLowerCase()) &&
            item.tech.toLowerCase().includes(tech.toLowerCase())
        );
        setItems(filteredItems);
    }

    const showAllItems = function() {
        setItems(allItems);
    }

    // Display Items
    let itemsListJsx = (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>CS#</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Company</th>
                    <th>Tech</th>
                    <th>Serial#</th>
                    <th>Phone#</th>
                    <th>SIM#</th>
                    <th>PO#</th>
                    <th>Firmware</th>
                    <th>Config</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.cs}</td>
                        <td>{item.equipment_type}</td>
                        <td>{item.status}</td>
                        <td>{item.company}</td>
                        <td>{item.tech}</td>
                        <td>{item.serial}</td>
                        <td>{item.phone}</td>
                        <td>{item.sim}</td>
                        <td>{item.po}</td>
                        <td>{item.firmware}</td>
                        <td>{item.config}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
    

    //output
    return (
        <>
            <ItemFilter company={company} tech={tech} onFilterChange={applyFilter}></ItemFilter>
            <div className="items-list-container">
                {itemsListJsx}
            </div>
        </>
    )

}