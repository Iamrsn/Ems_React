const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Complete Report",
          description: "Prepare and submit the monthly financial report.",
          date: "2024-12-20",
          category: "Finance",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          title: "Team Meeting",
          description: "Attend the weekly team meeting.",
          date: "2024-12-21",
          category: "Meetings",
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Client Follow-up",
          description: "Contact client X to finalize the project details.",
          date: "2024-12-22",
          category: "Communication",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Code Review",
          description: "Review the latest PRs from the development team.",
          date: "2024-12-20",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          title: "Submit Expense Report",
          description: "Send the monthly expense report to the finance team.",
          date: "2024-12-21",
          category: "Finance",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Schedule Interview",
          description: "Arrange an interview with the shortlisted candidate.",
          date: "2024-12-22",
          category: "HR",
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Update Project Plan",
          description: "Add new tasks to the project roadmap.",
          date: "2024-12-23",
          category: "Planning",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Inventory Check",
          description: "Audit the warehouse inventory for discrepancies.",
          date: "2024-12-20",
          category: "Logistics",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          title: "Social Media Campaign",
          description: "Launch the new campaign for product X.",
          date: "2024-12-21",
          category: "Marketing",
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Create Presentation",
          description: "Prepare slides for the annual review meeting.",
          date: "2024-12-20",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Draft Email",
          description: "Write and send the holiday schedule email to staff.",
          date: "2024-12-21",
          category: "Communication",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Fix Bug #123",
          description: "Resolve the issue reported on the login page.",
          date: "2024-12-20",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          title: "Test API Endpoint",
          description: "Verify the API performance and reliability.",
          date: "2024-12-21",
          category: "Development",
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
      ],
    },
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  ];
  
//   console.log(employees);
//   console.log(admin);
  

export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage=()=>{
   const employees =  JSON.parse(localStorage.getItem("employees"))
   const admin =  JSON.parse(localStorage.getItem("admin"))
   console.log(employees)
   console.log(admin)
}