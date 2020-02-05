import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.component.html",
  styleUrls: ["./department-list.component.scss"]
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    // this.router.navigate(["/departments", department.id]);
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
