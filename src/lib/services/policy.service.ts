import { PolicyLevel } from "../types";
import { travelPolicy } from "../data/policy";

export function getTravelPolicy(employeeLevel: string): PolicyLevel | { error: string } {
  const level = employeeLevel.toLowerCase();
  const policy = travelPolicy[level];
  if (!policy) {
    return {
      error: `未知的职级：${employeeLevel}，可选职级：${Object.keys(travelPolicy).join("、")}`,
    };
  }
  return policy;
}
