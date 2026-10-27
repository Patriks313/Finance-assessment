// Finance excellence assessment — question bank (source: Finance_excellence_V6.docx, section 5)
// good: the answer that indicates excellence ("yes" unless the question is reverse-scored)
const BANK = {
  version: "V6-3",
  // Who answers what: how = processes whose pillar questions the role answers; del = answers the deliverables (what)
  roles: [
    { name: "CEO", how: ["PL", "MR", "FM"], del: true },
    { name: "CFO", how: ["FO"], del: true },
    { name: "Finance team", how: ["FO"], del: false },
    { name: "Management team", how: ["PL", "MR", "FM"], del: false },
    { name: "Business / line manager", how: ["PL", "MR", "FM"], del: false },
    { name: "Board", how: ["PL", "MR", "FM"], del: false },
    { name: "Other", how: ["PL", "MR", "FM"], del: false } ],
  pillars: ["Clarity", "Partnership", "Communication"],
  processes: [
    { id: "PL", name: "Planning",
      deliverables: [
        { id: "PL-D1", text: "There is both an annual budget process and a forecast process" },
        { id: "PL-D2", text: "The business drives all relevant input for planning" },
        { id: "PL-D3", text: "The forecast is updated monthly" },
        { id: "PL-D4", text: "The organization has a rolling forecast of more than 12 months" },
        { id: "PL-D5", text: "Planning includes details and drivers for products and customers" },
        { id: "PL-D6", text: "Planning includes details on individual employees" } ],
      Clarity: { q: [
        "Is it clear to you what content you need to deliver in the process?",
        "Is it clear to you when your deliverables are due?",
        "Is it clear to you what the goal of the process is?",
        "Do you think everyone is aware of what content they should deliver in the process?",
        "Do you think everyone is aware of when their deliverables are due?",
        "Do you think everyone is aware of what the goal of the process is?" ],
        followup: ["What content do you deliver in the process?", "What are the deadlines for your deliverables?", "What is the goal of the process?"] },
      Partnership: { q: [
        "Is it clear to you what finance contributes to the process?",
        "Do you think finance is clear about what its contribution is?",
        "Do you know who in finance you should partner with?",
        "Are you satisfied with your partnership with finance in the planning process?" ],
        followup: ["What do you see as finance’s main contribution to the planning process?", "What is missing from finance’s contribution?", "How could finance support your processes better?"] },
      Communication: { q: [
        "Can you easily access documentation on the planning process?",
        "Do you think everyone can easily access documentation on the planning process?",
        "Can you easily follow the current status and outcome of the planning process?" ],
        followup: ["Where is the documentation for the planning process?", "Where do you find reporting on the current planning process?", "Who has access to planning reports?"] } },

    { id: "MR", name: "Reporting",
      deliverables: [
        { id: "MR-D1", text: "Monthly reports are distributed within 10 workdays of the close" },
        { id: "MR-D2", text: "The monthly report contains both financial and operational data" },
        { id: "MR-D3", text: "The monthly report includes KPIs linked to strategy" },
        { id: "MR-D4", text: "The monthly report includes relevant explanations of the result" },
        { id: "MR-D5", text: "A daily revenue flash is distributed within 3 workdays of the close" },
        { id: "MR-D6", text: "The monthly report includes the forecast" } ],
      Clarity: { q: [
        "Is it clear to you which reports, or sections of reports, are meant to track your business?",
        "Is it clear to you what the organization’s KPIs are?",
        ["Do you track financial or operational data separately in your own spreadsheets?", "no"],
        ["Do you generally question management reports?", "no"],
        ["Do management reports often leave your questions unanswered?", "no"] ],
        followup: ["Which operational KPIs are reported?", "What data do you track separately in your own spreadsheets?", "What data in management reports do you generally question?", "What is a common question that management reports can’t answer?"] },
      Partnership: { q: [
        "Has finance recently flagged a deviation or opportunity before it became a problem?",
        "Does finance consistently highlight issues or opportunities in your business that you didn’t already know about?",
        "Can you name one person in finance who understands your business?",
        "Do your P&L discussions with finance focus on the future?",
        "Does your finance partner take part in your management meetings?",
        "Did you talk to finance this month about something that wasn’t a problem?" ],
        followup: ["What deviation or opportunity did finance recently flag before it became a problem?", "What does your finance partner contribute in your management meetings?"] },
      Communication: { q: [
        "Do you know where monthly reports are published?",
        "Are you satisfied with the drill-down available in reports?",
        ["Are there any reports you wouldn’t notice if they stopped?", "no"],
        "Are you happy with when reports become available?",
        "Do you use official reports as the basis for your own reporting in the organization (up and down)?" ],
        followup: ["Where are monthly reports published?", "What drill-down are you missing in reports?", "Which reports wouldn’t you notice if they stopped?", "What do you use besides official reports for your own reporting?"] } },

    { id: "FM", name: "Financial management",
      deliverables: [
        { id: "FM-D1", text: "The CFO is active and contributes in the management team" },
        { id: "FM-D2", text: "The CFO is active and contributes in board meetings" },
        { id: "FM-D3", text: "The CFO is included and active in strategic discussions and decisions" },
        { id: "FM-D4", text: "The CFO drives cross-functional discussions and decisions" },
        { id: "FM-D5", text: "The CFO is seen as a key advisor to the CEO" } ],
      Clarity: { q: [
        "Do you see the CFO leading clarity in the organization?",
        "Do you see the CFO driving an agenda of clarity in the management team?",
        "Is the CFO’s mandate for financial management clear?",
        ["Have there been any discussions recently where financial ownership was unclear?", "no"] ],
        followup: ["Describe a recent financial decision where ownership was unclear.", "Describe how the CFO drives clarity in the management team.", "What is the CFO’s mandate for financial management?"] },
      Partnership: { q: [
        "Do you see the CFO as objective in the management team?",
        "Do you see the CFO focusing on the right things?",
        "Do you see the CFO managing the early warning system effectively?",
        "Does the management team look to the CFO for advice on strategic financial matters?",
        ["Was there a strategic decision recently where the CFO was brought in after the decision was made?", "no"] ],
        followup: ["What role does the CFO play in the early warning system?", "On which strategic financial matters does the management team look to the CFO for advice?", "Which strategic decision was the CFO brought into after it was made?"] },
      Communication: { q: [
        ["Does the CFO need to adjust how they communicate?", "no"],
        "Is it clear where the CFO communicates?" ],
        followup: [] } },

    { id: "FO", name: "Finance organization",
      deliverables: [
        { id: "FO-D1", text: "External reports are delivered on time and with quality" },
        { id: "FO-D2", text: "Taxes are filed and paid on time" },
        { id: "FO-D3", text: "The books are closed each month before workday 8" },
        { id: "FO-D4", text: "Financial policies and guidelines are available to the organization" } ],
      Clarity: { q: [
        "Do you have a clear job description?",
        "Do you think everyone in finance has a clear job description?",
        "Do you know which systems finance owns?",
        "Do you know who the system owner of each finance system is?" ],
        followup: ["What teams are there within finance?", "Which systems does finance own?", "Who is the system owner, technical owner, data owner and user lead for each finance system?"] },
      Partnership: { q: [
        "Do you think everyone in finance sees themselves as a partner to the business?",
        "Have you mapped your relationships outside finance?",
        "Do you think all finance staff have mapped their relationships outside finance?",
        "Do you see finance developing its partnerships outside finance?",
        ["Do you know of any part of the organization that has no contact with finance?", "no"],
        "Do you think finance adapts accounting to business needs in a timely manner?" ],
        followup: ["How does finance develop its partnerships with other parts of the company?", "Which part of the business has no contact with finance?", "When was finance’s stakeholder map last updated?"] },
      Communication: { q: [
        "Do you have visibility of all financial reports?",
        "Do you see clear ownership of each financial report?",
        "Are reports available in BI tools?",
        ["Do you think undocumented Excel reports are a significant risk?", "no"],
        "Do you think everyone in the organization has a clear view of the general finance processes, such as invoicing (O2C), accounts payable (P2P) and the other processes involved in the monthly close?" ],
        followup: ["Where can reports be found?", "Who owns each financial report, and is this documented?", "Where are the key financial processes described, and who has access to them?"] } }
  ]
};
// Normalise: give every question an id and a good answer
for (const p of BANK.processes) {
  for (const d of p.deliverables) d.good = d.good || "yes";
  BANK.pillars.forEach((pil, pi) => {
    p[pil].q = p[pil].q.map((x, i) => {
      const [text, good] = Array.isArray(x) ? x : [x, "yes"];
      return { id: `${p.id}-${pil[0]}${pil === "Communication" ? "o" : ""}${i + 1}`, text, good };
    });
  });
}
