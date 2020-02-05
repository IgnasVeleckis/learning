import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-department-detail",
  templateUrl: "./department-detail.component.html",
  styleUrls: ["./department-detail.component.scss"]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.departmentId = id;
    });
  }

  goPrev() {
    if (this.departmentId > 0) {
      let prevId = this.departmentId - 1;
      this.router.navigate(["/departments", prevId]);
    }
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(["/departments", nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    /* this.router.navigate([
      "/departments",
      { id: selectedId, test: "testvalue" }
    ]); */
    this.router.navigate(["../", { id: selectedId }], {
      relativeTo: this.route
    });
  }

  showOverview() {
    this.router.navigate(["overview"], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(["contact"], { relativeTo: this.route });
  }
}
