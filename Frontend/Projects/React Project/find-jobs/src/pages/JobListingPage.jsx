import React, { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [filteredJobs, setFiltered0Jobs] = useState([]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getJobs();
      console.log(data);
      setJobs(data);
    } catch (err) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = () => {
    let result = [...jobs];
    if (search) {
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase()) ||
          job.description.toLowerCase().includes(search.toLowerCase()),
      );
    }

    //Type Filter

    if (filters.type) {
      result = result.filter((job) => job.type === filters.type);
    }
    //Experience Filter;
    if (filters.experience) {
      result = result.filter((job) => job.experience === filters.experience);
    }

    //Work Mode Filter
    if (filters.workMode) {
      result = result.filter((job) => job.workMode === filters.workMode);
    }
    setFiltered0Jobs(result);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [jobs, filters, search]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 ">
      <div className="constiner mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Job
          </h1>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3">
            <FaSearch className="text-gray-400 text-2xl" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 focus:outline-none text-gray-700"
              type="text"
              placeholder="Search by job title, company, or description..."
            />
          </div>
        </div>
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Filters
              onFilterChange={handleFilterChange}
              initialFilter={filters}
            />
          </div>
          {/* Job Listing */}
          <div className="lg:col-span-3 ">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600 font-semibold ">Showing 8 Jobs</p>
            </div>
            {jobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No jobs found matching you criteria
                </p>
                <p className="text-gray-400 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredJobs?.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
