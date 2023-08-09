import { createDbWorker } from "sql.js-httpvfs";

const workerUrl = new URL("sql.js-httpvfs/dist/sqlite.worker.js", import.meta.url).toString();
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url).toString();

let worker: any;

async function init() {
    worker = await createDbWorker(
        [{
          from: "jsonconfig",
          configUrl: "../companies_house/config.json"
        }],
        workerUrl,
        wasmUrl
    );

    setupEventListeners();
}

async function searchCompanies(searchTerm: string) {
    return await worker.db.query(`
      SELECT company_name, company_number
      FROM companies_name_search 
      WHERE company_name MATCH ?
      LIMIT 10;`,
    [searchTerm]);
}

async function getCompanyIndividuals(companyNumber: string) {
  return await worker.db.query(`SELECT name, date_of_birth_month, date_of_birth_year FROM PersonCompanyLink WHERE company_number = ?`, [companyNumber]);
}

async function getCompanyAddress(companyNumber: string) {
  // Fetching the individuals linked to the company
  return worker.db.query(`SELECT address_line_1, postal_code FROM companies WHERE company_number = ?`, [companyNumber]);
}

function createTable(data: any[], headers: string[]) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);

  // Add headers
  const headerRow = document.createElement("tr");
  headers.forEach(header => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Add data
  data.forEach(row => {
    const tableRow = document.createElement("tr");
    headers.forEach(header => {  // Change from Object.values(row).forEach
        const cellValue = row[header.toLowerCase().replace(/ /g, '_')];  // Convert header to column name format
        const td = document.createElement("td");
        td.textContent = String(cellValue);
        tableRow.appendChild(td);
    });
    tbody.appendChild(tableRow);
  });

  return table;
}

function setupEventListeners() {
  const searchInput = document.getElementById("companySearch")!;
  const searchResultsTableDiv = document.getElementById("searchResultsTable")!;
  const addressesDiv = document.getElementById("addresses")!;
  const individualsDiv = document.getElementById("individuals")!;

  searchInput.addEventListener("input", async (event: Event) => {
      const searchTerm = (event.target as HTMLInputElement).value;
      const companies = await searchCompanies(searchTerm);

      searchResultsTableDiv.innerHTML = "";
      if (companies.length) {
          console.log(companies)
          const resultsTable = createTable(companies, ['Company Name']);
          searchResultsTableDiv.appendChild(resultsTable);

          // Add click event listeners to rows to fetch and display details
          resultsTable.querySelectorAll('tbody tr').forEach((row, index) => {
              row.addEventListener("click", async () => {
                  console.log("Company Number:", companies[index].company_number);
                  const individuals = await getCompanyIndividuals(companies[index].company_number);
                  const addresses = await getCompanyAddress(companies[index].company_number);

                  addressesDiv.innerHTML = "";
                  const addressTable = createTable(addresses, ['Address Line 1', 'Postal Code']);
                  addressesDiv.appendChild(addressTable);

                  individualsDiv.innerHTML = "";
                  const individualTable = createTable(individuals, ['Name', 'Date of Birth Month', 'Date of Birth Year']);
                  individualsDiv.appendChild(individualTable);
              });
          });
      }
  });
}

init();
