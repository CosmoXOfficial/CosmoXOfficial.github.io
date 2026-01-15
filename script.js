// Mostra/nascondi sezioni
const loginBtn = document.getElementById("loginBtn");
const dashboardBtn = document.getElementById("dashboardBtn");
const premiumBtn = document.getElementById("premiumBtn");

const dashboardSection = document.getElementById("dashboard");
const premiumSection = document.getElementById("premium");

loginBtn.onclick = () => alert("Login finto per ora");
dashboardBtn.onclick = () => { dashboardSection.style.display = "block"; premiumSection.style.display = "none"; }
premiumBtn.onclick = () => { premiumSection.style.display = "block"; dashboardSection.style.display = "none"; }

// Calcolo prezzo
const monthsInput = document.getElementById("months");
const priceSpan = document.getElementById("price");
monthsInput.addEventListener("input", () => {
  const pricePerMonth = 2;
  priceSpan.textContent = (monthsInput.value * pricePerMonth) + "€";
});

// Finto pagamento
const payBtn = document.getElementById("payBtn");
const status = document.getElementById("status");
payBtn.onclick = () => { status.textContent = "Stato: In attesa di conferma admin"; alert("Pagamento registrato!"); }

// Salvataggio ruolo staff finto
const saveRoleBtn = document.getElementById("saveRoleBtn");
saveRoleBtn.onclick = () => {
  const role = document.getElementById("staffRole").value;
  alert(`Ruolo staff salvato: ${role} (finto backend)`);
}
