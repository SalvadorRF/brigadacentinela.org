const personalRegistrado = [{
  id: "001",
  matricula: "BC-001",
  img: "SalvadorRicoAvatar.png",
  nombre: "Salvador Rico",
  cargo: "Primer Respondiente",
  formacion: "Ingeniería de Sistemas, Universidad de Montemorelos",
  certificaciones: [
    "TAMP",
    "Proveedor de Soporte Vital Basico (BLS - AHA)",
    "Instructor de Soporte Vital Basico (BLS - AHA)",
    "FOTS",
    "PHTLS",
  ],
  experiencia: "5 años en gestión de emergencias y protección civil",
  unidad: "Unidad de Respuesta Rápida",
  fechaInicio: "20 de agosto de 2023",
  vigencia: "31 de diciembre de 2025",
},
{
  id: "002",
  matricula: "BC-002",
  nombre: "Juan Carlos",
  img: "MenAvatar.png",
  cargo: "Director de Operaciones",
  formacion: "Licenciatura en Protección Civil, Universidad Nacional Autónoma de México",
  certificaciones: [
    "Técnico en Urgencias Médicas (TUM-B)",
    "Certificación en Gestión de Emergencias",
    "Instructor en Primeros Auxilios",
  ],
  experiencia: "12 años en gestión de emergencias y protección civil",
  unidad: "Unidad de Respuesta Rápida",
  fechaInicio: "15 de enero de 2018",
  vigencia: "31 de diciembre de 2023",
}

]

document.addEventListener("DOMContentLoaded", () => {
  // Validation page functionality
  const validationForm = document.getElementById("validationForm")
  const tabBtns = document.querySelectorAll(".tab-btn")
  const validationResult = document.querySelector(".validation-result")
  const personResult = document.querySelector(".person-result")
  const vehicleResult = document.querySelector(".vehicle-result")

  if (validationForm) {
    validationForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const idInput = document.getElementById("id-input").value
      const activeTab = document.querySelector(".tab-btn.active").dataset.type

      if (!idInput) {
        validationResult.style.display = "none"
        alert("Por favor ingrese un ID válido.")
        return
      }

      if (activeTab === "person") {

        const person = personalRegistrado.find(person => person.id === idInput.replace("BC-", ""))

        if(person){
          validationResult.style.display = "block"
          validationResult.innerHTML = personResultContent(person)
        } else {
          validationResult.style.display = "none"
          alert("El ID ingresado no es válido.")
        }

        
      } else {
        validationResult.style.display = "block"
      }

      // Scroll to result
      window.scrollTo({
        top: validationResult.offsetTop - 100,
        behavior: "smooth",
      })
    })
  }

  // Tab switching
  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        tabBtns.forEach((b) => b.classList.remove("active"))
        this.classList.add("active")

        // Reset form and hide results when switching tabs
        if (validationForm) {
          validationForm.reset()
        }
        if (validationResult) {
          validationResult.style.display = "none"
        }
      })
    })
  }
})

const personResultContent = ({
  id,
  matricula,
  nombre,
  img,
  cargo,
  formacion,
  certificaciones,
  experiencia,
  unidad,
  fechaInicio,
  vigencia,
}) => `
<div class="person-result">
  <div class="result-header">
    <div class="result-image">
      <img src="./assets/img/personal/${img}" alt="${nombre}">
    </div>
    <div class="result-info">
      <h2>${nombre}</h2>
      <p>${cargo}</p>
      <p>ID: ${matricula}</p>
    </div>
    <div class="result-status status-active">Activo</div>
  </div>
  
  <div class="result-details">
    <div class="detail-item">
      <div class="detail-label">Formación Académica</div>
      <div class="detail-value">${formacion}</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Certificaciones</div>
      <div class="detail-value">
        <ul>
          ${
            certificaciones.map((certificacion) => `<li>${certificacion}</li>`).join("")
          }
        </ul>
      </div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Experiencia</div>
      <div class="detail-value">${experiencia}</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Unidad Asignada</div>
      <div class="detail-value">${unidad}</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Fecha de Incorporación</div>
      <div class="detail-value">${fechaInicio}</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Vigencia de Credencial</div>
      <div class="detail-value">${vigencia}</div>
    </div>
  </div>
</div>
`