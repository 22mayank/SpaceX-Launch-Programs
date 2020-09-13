import React, { Component } from "react";
import "./Body.css";
import DataService from "./services/DataService";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      programList: [],
      yearFilter: "",
      launchFilter: "",
      landFilter: "",
    };
  }

  async componentDidMount() {
    let response = await DataService.getProgramList();
    this.setState({ programList: response });
  }

  displayNames = (missionapplicable) => {
    let result = [];
    if (missionapplicable.length > 0) {
      missionapplicable.forEach((element) => {
        result.push(
          <span className="card-text-value" key={"span-row-" + element}>
            {element}
          </span>
        );
        result.push(<br key={"br-row-" + element} />);
      });
    } else {
      result.push(<span key="1">{"-"}</span>);
    }

    return result;
  };

  setLaunch = (eve) => {
    let launchFilter = eve.target.value;
    this.setState({ launchFilter: launchFilter }, () => {
      this.getFilteredData();
    });
  };

  setLand = (eve) => {
    let landFilter = eve.target.value;
    this.setState({ landFilter: landFilter }, () => {
      this.getFilteredData();
    });
  };

  setYear = (eve) => {
    let yearFilter = eve.target.value;
    this.setState({ yearFilter: yearFilter }, () => {
      this.getFilteredData();
    });
  };

  getFilteredData = async () => {
    const { launchFilter, yearFilter, landFilter } = this.state;
    if (
      (launchFilter !== "" || launchFilter !== undefined) &&
      landFilter === "" &&
      yearFilter === ""
    ) {
      let launchData = await DataService.getLaunchList(launchFilter);
      this.setState({ programList: launchData });
    } else if (
      (launchFilter !== "" || launchFilter !== undefined) &&
      (landFilter !== "" || landFilter !== undefined) &&
      yearFilter === ""
    ) {
      let landData = await DataService.getLandList(launchFilter, landFilter);
      this.setState({ programList: landData });
    } else if (
      (launchFilter !== "" || launchFilter !== undefined) &&
      (landFilter !== "" || landFilter !== undefined) &&
      (yearFilter !== "" || yearFilter !== undefined)
    ) {
      let allData = await DataService.getAllList(
        launchFilter,
        landFilter,
        yearFilter
      );
      this.setState({ programList: allData });
    } else {
      let response = await DataService.getProgramList();
      this.setState({ programList: response });
    }
  };

  resetFilter = () => {
    this.setState(
      {
        launchFilter: "",
        landFilter: "",
        yearFilter: "",
      },
      () => {
        this.getFilteredData();
      }
    );
  };

  render() {
    const { programList, yearFilter, landFilter, launchFilter } = this.state;

    return (
      <div className="app-container container-fluid">
        <div class="row">
          <div className="filter col-lg-3">
            <div class="container-fluid">
              <div className="filterCard card">
                <div className="filterCard-body card-body">
                  <div className="filterHeading">
                    <h5 className="filter-title card-title">Filters</h5>
                    <button
                      type="button"
                      className="resetButton btn btn-link"
                      disabled={
                        yearFilter === "" &&
                        launchFilter === "" &&
                        landFilter === ""
                          ? true
                          : false
                      }
                      onClick={(e) => {
                        this.resetFilter();
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                  <h6 className="card-subtitle">Launch Year</h6>
                  <div className="launchDivider"></div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2006"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2006
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2007"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2007
                      </button>
                    </div>
                  </div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2008"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2008
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2009"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2009
                      </button>
                    </div>
                  </div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2010"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2010
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2011"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2011
                      </button>
                    </div>
                  </div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2012"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2012
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2013"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2013
                      </button>
                    </div>
                  </div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2014"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2014
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2015"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2015
                      </button>
                    </div>
                  </div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2016"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2016
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2017"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2017
                      </button>
                    </div>
                  </div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2018"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2018
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2019"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2019
                      </button>
                    </div>
                  </div>
                  <div
                    className="yearToolbar btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2020"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2020
                      </button>
                    </div>
                    <div
                      className="btn-group mr-2 buttonHide"
                      role="group"
                      aria-label="Second group"
                    >
                      <button
                        type="button"
                        className="yearBtn btn btn-success"
                        value="2019"
                        onClick={(e) => {
                          this.setYear(e);
                        }}
                      >
                        2021
                      </button>
                    </div>
                  </div>
                  <div className="successFilter">
                    <h6 className="card-subtitle">Successful Launch</h6>
                    <div className="launchDivider"></div>
                    <div
                      className="yearToolbar btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button
                          type="button"
                          className="yearBtn btn btn-success"
                          value="true"
                          onClick={(e) => {
                            this.setLaunch(e);
                          }}
                        >
                          True
                        </button>
                      </div>
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <button
                          type="button"
                          className="yearBtn btn btn-success"
                          value="false"
                          onClick={(e) => {
                            this.setLaunch(e);
                          }}
                        >
                          False
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="successFilter">
                    <h6 className="card-subtitle">Successful Landing</h6>
                    <div className="launchDivider"></div>
                    <div
                      className="yearToolbar btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button
                          type="button"
                          className="yearBtn btn btn-success"
                          value="true"
                          onClick={(e) => {
                            this.setLand(e);
                          }}
                        >
                          True
                        </button>
                      </div>
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <button
                          type="button"
                          className="yearBtn btn btn-success"
                          value="false"
                          onClick={(e) => {
                            this.setLand(e);
                          }}
                        >
                          False
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="card-text-label">Selected Filters ---</span>
              </div>
              <div>
                <span className="card-text-label">Launch Year:</span>
                <span className="card-text-value">{yearFilter}</span>
              </div>
              <div>
                <span className="card-text-label">Successful Launch:</span>
                <span className="card-text-value">{launchFilter}</span>
              </div>
              <div>
                <span className="card-text-label">Successful Land:</span>
                <span className="card-text-value">{landFilter}</span>
              </div>
            </div>
          </div>
          <section className="col-lg-9">
            <React.Fragment>
              <div class="container-fluid">
                <div className="card-row row">
                  {programList.length > 0 &&
                    programList.map((row, index) => {
                      return (
                        <div className="card-base" key={index}>
                          <div className="card h-100">
                            <div className="img-div">
                              <img
                                className="card-img-top"
                                src={row.links.mission_patch_small}
                                alt="Card cap"
                              />
                            </div>
                            <div className="card-block">
                              <p className="card-title">
                                {row.mission_name + " #" + row.flight_number}
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Mission Ids:
                                </span>
                                {this.displayNames(row.mission_id)}
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Launch Year:
                                </span>
                                <span className="card-text-value">
                                  {row.launch_year}
                                </span>
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Successful Launch:
                                </span>
                                <span className="card-text-value">
                                  {row.launch_success !== null &&
                                    row.launch_success.toString()}
                                </span>
                              </p>
                              <p className="card-text">
                                <span className="card-text-label">
                                  Successful Landing:
                                </span>
                                <span className="card-text-value">
                                  {row.launch_landing &&
                                    row.launch_landing.toString()}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </React.Fragment>
          </section>
        </div>
      </div>
    );
  }
}

export default Body;
