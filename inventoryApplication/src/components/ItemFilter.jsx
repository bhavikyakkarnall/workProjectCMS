import { useRef, useState } from "react";

export default function ItemFilter({cs, serial, company, tech, onFilterChange}) {
    const [cs, setCS] = useState("");
    const [serial, setSerial] = useState("");
    const [company, setCompany] = useState("");
    const [tech, setTech] = useState("");
    
    const csRef = useRef();
    const serialRef = useRef();
    const companyRef = useRef();
    const techRef = useRef();

    function handleCSSearch(e) {
        const csText = e.target.value;
        setCS(csText);
        applyFilter();
    }

    function handleSerialChange(e) {
        const serialText = e.target.value;
        setCS(serialText);
        applyFilter();
    }

    function handleCompanyChange(e) {
        const companyText = e.target.value;
        setCS(companyText);
        applyFilter();
    }

    function handleTechChange(e) {
        const techText = e.target.value;
        setCS(techText);
        applyFilter();
    }

    function applyFilter() {
        onFilterChange(csRef.current.value, serialRef.current.value, companyRef.current.value, techRef.current.value)
    }

    function resetFilterControls() {
        setCS("");
        setSerial("");
        setCompany("");
        setTech("");
        csRef.current.value = "";
        serialRef.current.value = "";
        companyRef.current.value = "";
        techRef.current.value = "";
    }

    function removeFilters() {
        resetFilterControls();
        applyFilter();
    }

    let csOptionsJsx = cs.map(cs => {
        return (
            <option value={cs}>{cs}</option>
        )
    })
    csOptionsJsx.unshift(<option value="">All</option>)

    let serialOptionsJsx = serial.map(serial => {
        return (
            <option value={serial}>{serial}</option>
        )
    })
    serialOptionsJsx.unshift(<option value="">All</option>)
    
    let companyOptionsJsx = company.map(company => {
        return (
            <option value={company}>{company}</option>
        )
    })
    companyOptionsJsx.unshift(<option value="">All</option>)
    
    let techOptionsJsx = tech.map(tech => {
        return (
            <option value={tech}>{tech}</option>
        )
    })
    techOptionsJsx.unshift(<option value="">All</option>)

    return (
        <>
            <div>
                <input type="text" ref={csRef}
                    className="item-search-box"
                    value={cs}
                    onChange={(e) => { handleCSSearch(e) }}
                    placeholder="Enter a title">
                </input>
                <button onClick={() => { removeFilters(); }}>Remove Filters</button>
            </div>

            <div>
                Filters:
                Company
                <select ref={companyRef}
                onChange={(e) => {handleCompanyChange(e)}}>
                    {companyOptionsJsx}
                </select>

                Tech
                <select ref={techRef}
                onChange={(e) => {handleTechChange(e)}}>
                    {techOptionsJsx}
                </select>
            </div>
        </>
    )

}