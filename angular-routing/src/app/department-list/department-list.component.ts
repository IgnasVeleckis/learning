import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.component.html",
  styleUrls: ["./department-list.component.scss"]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {
      id: 1,
      name: "Security"
    },
    {
      id: 2,
      name: "Finance"
    },
    {
      id: 3,
      name: "health"
    },
    {
      id: 4,
      name: "Banking"
    },
    {
      id: 5,
      name: "Dep"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelect(department) {
    this.router.navigate(["/departments", department.id]);
  }
}
