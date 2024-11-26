const users = [
  { name: "Ahmet", email: "ahmet@example.com", status: "Active" },
  { name: "Mehmet", email: "mehmet@example.com", status: "Inactive" },
  { name: "Fatma", email: "fatma@example.com", status: "Active" },
  { name: "Ayşe", email: "ayse@example.com", status: "Inactive" },
  { name: "Ali", email: "ali@example.com", status: "Active" },
];

// const statusler = users.map(function (user) {
//   return user.status;
// });

// console.log(statusler);

const inactiveStatuses = users.filter(function (user) {
  return user.status === "Inactive";
});

console.log(inactiveStatuses);

const activeStatuses = users.filter(function (user) {
  return user.status === "Active";
});
console.log(activeStatuses);

function renderEmployees(status) {
  const employeesMapping = {
    active: activeStatuses,
    inactive: inactiveStatuses,
    all: users,
  };

  const filteredUsers = employeesMapping[status];

  renderEmployeesHtml.innerHTML = " ";

  filteredUsers.forEach((user) => {
    renderEmployeesHtml.innerHTML += `
    <div class="col-lg-4  d-flex justify-content-center">  
        <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">${user.email}</p>
          <p class="card-text">${user.status}</p>
        </div>
      </div>
      </div>`;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderEmployees("all");
});
