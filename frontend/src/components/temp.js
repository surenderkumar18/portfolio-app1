import React, { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";
import PositionModal from "./PositionModal";
import PositionItem from "./PositionItem";
import Summary from "./Summary";
import { getStrategyData } from "../utils/helpers/positionHelpers";

const Container = styled.div``;

const Table = styled.table`
  color: #212529;
  border-collapse: collapse;
  width: 100%;
  border: 0.1rem solid rgba(0, 0, 0, 0.08);
`;

const HeaderRow = styled.thead`
  color: #212529;
`;

const TableBody = styled.tbody`
  color: #212529;
`;

const Row = styled.tr`
  padding: 10px;
  border-bottom: 1px solid #eff2f7;
  background-color: ${({ className }) =>
    className === "even" ? "#f6f5f5" : "#ffffff"};

  &.last {
    border-bottom: 1px solid #dde0e3;
  }
`;

const HeaderCell = styled.th`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: normal;
  line-height: 140%;
  padding: 0.8rem;
  border-bottom: 1px solid #eff2f7;
  border-top: 1.5px solid rgba(0, 0, 0, 0.15);
  text-align: left;
  cursor: pointer;
  border-right: 1px #fcfbfb solid;
  background-color: #cccccc;
`;
const HeaderSrCell = styled.th`
  font-family: "IBM-Plex-Sans-SemiBold", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: normal;
  line-height: 140%;
  padding: 0.8rem;
  border-bottom: 1px solid #eff2f7;
  border-top: 1.5px solid rgba(0, 0, 0, 0.15);
  text-align: left;
  cursor: pointer;
  border-right: 1px #fcfbfb solid;
  width: 20px;
  text-align: center;
  background-color: #cccccc;
`;
const ColSrCell = styled.td`
  font-family: "IBM-Plex-Sans-SemiBold", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  font-feature-settings: normal;
  line-height: 140%;
  padding: 0.4rem 0.8rem;
  border-bottom: 1px solid #eff2f7;
  border-top: 1.5px solid rgba(0, 0, 0, 0.15);
  text-align: left;
  cursor: pointer;
  border-right: 1px #fcfbfb solid;
  width: 20px;
  text-align: center;
  background-color: #cccccc;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const CheckboxItem = styled.div`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 12px;
`;

const FilterContainer = styled.div`
  margin: 16px 0;
`;

const PositionList = ({ isHistory }) => {
  const queryClient = useQueryClient();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const [visibleColumns, setVisibleColumns] = useState({
    stockName: { visible: true, label: "Name" },
    stockSymbol: { visible: false, label: "Symbol" },
    profitLossPercentage: {
      visible: true,
      label: "P&L(%)",
      textAlign: "center",
    },
    buyDate: { visible: true, label: "Buy Date" },
    buyPrice: { visible: true, label: "Buy Price", textAlign: "center" },
    currentPrice: { visible: true, label: "Curr Price", textAlign: "center" },
    totalStocks: { visible: true, label: "Qty." },
    investmentAmount: {
      visible: false,
      label: "Invest Amount",
      textAlign: "right",
    },
    currentValue: { visible: true, label: "Curr Value", textAlign: "right" },
    stopLoss: { visible: true, label: "S/Loss", textAlign: "center" },
    holdPeriod: { visible: false, label: "Hold Days", textAlign: "center" },
    sellDate: { visible: false, label: "Sell Date" },
    sellPrice: { visible: false, label: "Sell Price" },
    notes: { visible: false, label: "Notes" },
    images: { visible: true, label: "Images" },
    edit: { visible: true, label: "Edit", textAlign: "center" },
    delete: { visible: true, label: "Delete", textAlign: "center" },
    view: { visible: true, label: "View", textAlign: "center" },
  });

  const fetchPositions = async (isHistory) => {
    const endpoint = isHistory
      ? "http://localhost:3041/api/positions?isDeleted=true"
      : "http://localhost:3041/api/positions";
    const { data } = await axios.get(endpoint);
    return data;
  };

  const { data: positions, isLoading } = useQuery({
    queryKey: [isHistory ? "historyPositions" : "positions"],
    queryFn: () => fetchPositions(isHistory),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) =>
      axios.delete(`http://localhost:3041/api/positions/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["positions"]);
    },
  });

  const toggleColumnVisibility = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: {
        ...prev[column],
        visible: !prev[column].visible,
      },
    }));
  };

  const handleSort = (column) => {
    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: column, direction });
  };

  const handleStrategyChange = (event) => {
    setSelectedStrategy(event.target.value);
  };

  const filteredPositions = useMemo(() => {
    if (!positions || !selectedStrategy) return positions;
    return positions.filter(
      (position) => position.strategy === selectedStrategy
    );
  }, [positions, selectedStrategy]);

  const sortedPositions = useMemo(() => {
    if (!filteredPositions || !sortConfig.key) return filteredPositions;

    return [...filteredPositions].sort((a, b) => {
      if (sortConfig.key === "stockName" || sortConfig.key === "stockSymbol") {
        return sortConfig.direction === "asc"
          ? a[sortConfig.key].localeCompare(b[sortConfig.key], undefined, {
              numeric: true,
              sensitivity: "base",
            })
          : b[sortConfig.key].localeCompare(a[sortConfig.key], undefined, {
              numeric: true,
              sensitivity: "base",
            });
      }

      if (
        sortConfig.key === "buyDate" ||
        sortConfig.key === "sellDate" ||
        sortConfig.key === "createdDate"
      ) {
        return sortConfig.direction === "asc"
          ? new Date(a[sortConfig.key]) - new Date(b[sortConfig.key])
          : new Date(b[sortConfig.key]) - new Date(a[sortConfig.key]);
      }

      if (
        sortConfig.key === "buyPrice" ||
        sortConfig.key === "currentPrice" ||
        sortConfig.key === "profitLossPercentage"
      ) {
        return sortConfig.direction === "asc"
          ? a[sortConfig.key] - b[sortConfig.key]
          : b[sortConfig.key] - a[sortConfig.key];
      }
      return sortConfig.direction === "asc"
        ? a[sortConfig.key] - b[sortConfig.key]
        : b[sortConfig.key] - a[sortConfig.key];
    });
  }, [filteredPositions, sortConfig]);

  return (
    <Container>
      <Summary positions={positions} />
      <FilterContainer>
        <label htmlFor='strategy-filter'>Filter by Strategy:</label>
        <select
          id='strategy-filter'
          value={selectedStrategy}
          onChange={handleStrategyChange}
        >
          <option value=''>All</option>
          {getStrategyData().map((strategy) => (
            <option key={strategy.value} value={strategy.value}>
              {strategy.text}
            </option>
          ))}
        </select>
      </FilterContainer>
      <CheckboxContainer>
        {Object.keys(visibleColumns).map((column) => (
          <CheckboxItem key={column}>
            <input
              type='checkbox'
              id={column}
              checked={visibleColumns[column].visible}
              onChange={() => toggleColumnVisibility(column)}
            />
            <CheckboxLabel htmlFor={column}>
              {visibleColumns[column].label}
            </CheckboxLabel>
          </CheckboxItem>
        ))}
      </CheckboxContainer>
      <Table>
        <HeaderRow>
          <HeaderSrCell>#</HeaderSrCell>
          {Object.keys(visibleColumns).map(
            (column) =>
              visibleColumns[column].visible && (
                <HeaderCell
                  key={column}
                  onClick={() => handleSort(column)}
                  style={{
                    textAlign: visibleColumns[column].textAlign || "left",
                  }}
                >
                  {visibleColumns[column].label}
                </HeaderCell>
              )
          )}
        </HeaderRow>
        <TableBody>
          {sortedPositions &&
            sortedPositions.map((position, index) => (
              <Row key={position.id} className={index % 2 === 0 ? "even" : ""}>
                <ColSrCell>{index + 1}</ColSrCell>
                {Object.keys(visibleColumns).map(
                  (column) =>
                    visibleColumns[column].visible && (
                      <PositionItem
                        key={column}
                        column={column}
                        position={position}
                        deleteMutation={deleteMutation}
                        setSelectedPosition={setSelectedPosition}
                      />
                    )
                )}
              </Row>
            ))}
        </TableBody>
      </Table>
      {selectedPosition && (
        <PositionModal
          position={selectedPosition}
          onClose={() => setSelectedPosition(null)}
        />
      )}
    </Container>
  );
};

export default PositionList;
