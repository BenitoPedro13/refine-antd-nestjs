// import { useState } from "react";

// import IconagraphyIconSearchStroke from "../icons/IconagraphyIconSearchStroke";
// import { CreatorService } from "@database/services/CreatorService";

// const SearchComponent = ({ projectId, insertContractFunc }) => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const [searchOpen, setSearchOpen] = useState(false);
//   const creatorService = new CreatorService();
//   const contractService = new ContractService();

//   const maxResultsToShow = 7; // Número máximo de resultados a serem exibidos
//   let timeout; // Declaração da variável timeout

//   // Função para buscar os resultados
//   const searchResults = async (searchQuery) => {
//     // Aqui você faria a requisição para o back-end para buscar os resultados
//     // Substitua a linha abaixo pela chamada à sua API

//     const response = await creatorService.search(searchQuery);

//     const data = await response;
//     console.log("data", data);

//     return data;
//   };

//   function clearResults() {
//     setResults([]);
//     console.log("Campo de busca vazio. Resultados limpos.");
//   }
//   const handleBlur = (event) => {
//     setResults([]);
//   };
//   // Função para atualizar os resultados conforme o usuário digita
//   const handleSearch = (event) => {
//     const searchQuery = event.target.value.toLowerCase().trim();
//     setQuery(event.target.value.toLowerCase());

//     clearTimeout(timeout);

//     //const inputValue = event.target.value; // Remover espaços em branco no início e no final

//     // Verificar se o campo está vazio
//     // if (searchQuery === '') {
//     //     // Limpar os resultados
//     //     clearResults();
//     //     return;
//     // }

//     // Aguardar 300ms após a última digitação antes de fazer a busca
//     timeout = setTimeout(async () => {
//       const results = await searchResults(searchQuery);
//       setSearchOpen(true);
//       setResults(results);
//     }, 0);
//   };

//   const handleInsertCreator = async (creator_id) => {
//     console.log("handleInsertCreator", handleInsertCreator);
//     const results = await contractService.insertContract(creator_id, projectId);
//     if (results) {
//       setQuery("");
//       setSearchOpen(false);
//       insertContractFunc();
//     }
//   };

//   return (
//     <>
//       {searchOpen ? (
//         <div
//           className="close-index"
//           onClick={() => {
//             setSearchOpen(false);
//           }}
//         ></div>
//       ) : null}
//       <div className="i-busca w-[556px] h-[39px] pl-[8px] pr-[16px] py-[8px] absolute top-[17px] left-0 bg-white rounded-[100px]  border-2 border-solid border-black flex items-center">
//         <div className="w-[534px] gap-[13px] relative mt-[-4.50px] mb-[-4.50px] mr-[-2.00px] flex items-center">
//           <div
//             className={` w-[27px] h-[27px] justify-center gap-[8px] p-[8px] relative bg-[#ff77ef] rounded-[100px]  flex items-center`}
//           >
//             <IconagraphyIconSearchStroke
//               className="!relative !w-[17px] !h-[17px] !mt-[-3.00px] !mb-[-3.00px] !ml-[-3.00px] !mr-[-3.00px]"
//               color="white"
//             />
//           </div>
//           <div className="relative">
//             <input
//               placeholder="Buscar e adicionar usuario"
//               className="relative w-[488px] focus-visible:outline-[0px] font-family:'Plus_Jakarta_Sans',Helvetica font-normal text-[#667085] text-[14px] tracking-[0] leading-[22px]"
//               onChange={handleSearch}
//               onClick={handleSearch}
//               value={query}
//             />
//             {/* Lista os resultados */}
//           </div>
//         </div>
//       </div>
//       <ul
//         className={`${
//           searchOpen ? "" : "invisible"
//         } r-busca absolute top-[30px] z-2 bg-white`}
//       >
//         {results?.map((result, index) => (
//           <li
//             onClick={() => handleInsertCreator(result.creator_id)}
//             className="li-busca flex flex-row align-center"
//             key={index}
//           >
//             {/* <img className='rounded-max w-[2rem] mr-[1rem]' src={result.image} /> */}
//             {result.name}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default SearchComponent;
