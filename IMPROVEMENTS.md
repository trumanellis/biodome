# Biodome Build Guide: Comprehensive Improvement Analysis

Deep review of all construction processes, materials, and techniques described across the full biodome build guide (34 content pages). The goal is to identify technical inaccuracies, practical challenges, missing information, alternative materials, and opportunities to strengthen the guide as a credible, buildable reference.

---

## CRITICAL: Technical Issues That Could Cause Build Failure

### 1. Light Straw-Clay Formwork Contradiction
**The single biggest technical problem in the guide.**

Traditional light straw-clay (Leichtlehm) is packed between **rigid slip-forms** -- temporary plywood boards clamped to both sides of a wall frame. You stuff the straw-clay between the forms, tamp it, let it firm, slide the forms up, repeat. This compression is what achieves the ~400 kg/m3 density and R-7 insulation value cited in the guide.

**On a curved dome exterior with no second surface to press against, this technique is impossible.** What the guide actually describes (pressing handfuls onto the outside of the wattle in 25mm lifts) is essentially **daubing** -- a fundamentally different technique that:
- Cannot achieve the same density or insulation value
- Will slump on the upper dome (the guide acknowledges this at `05-shell.mdx:37`)
- Has no historical precedent at the claimed 100mm thickness on a curved overhead surface

**Alternatives to evaluate:**
- **Wattle and daub** (clay-straw-dung pressed into and over wattle) -- historically proven on curved surfaces, no forms needed, but heavier and less insulating (~R-2 to R-3 at 100mm)
- **Hempcrete** -- can be spray-applied or hand-packed on curved surfaces without forms; better insulation (R-2.5/inch); sets with lime binder. But hemp shiv sourcing in Portugal is uncertain and lime binder adds cost
- **Cork board insulation** -- Portugal is the world's largest cork producer; cork boards provide R-3.6/inch, are fire-resistant, and can be mechanically fastened to the wattle. Never mentioned in the guide despite being the obvious local material
- **Thicker straw-clay packed INTO the wattle cavity** (not on the exterior) -- if the wattle were built as a double-wall with 200-300mm cavity, traditional slip-form technique could work inside the cavity. This would require redesigning the wattle weave
- **Hybrid approach** -- thin daub coat on exterior for weather skin, cork or sheep wool insulation on interior

### 2. Wall Thickness Inconsistency Between Pages
- `fundamentals/04-walls.mdx:72` says: "Final wall thickness: 35-45cm"
- `standard-biodome/05-shell.mdx:15-17` says: "100mm thickness" with "approximately R-7"

These are 3.5-4.5x different. The fundamentals page describes packing "between wattle poles in 15-20cm lifts" (implying a cavity), while the shell page describes applying to the "outside of the wattle" in 25mm lifts. **These describe two different construction methods on two different pages that are supposed to be describing the same process.** This needs to be reconciled.

### 3. R-7 Insulation Is Inadequate for Habitable Construction
Even in Portugal's mild climate (Csb/Csa), inland winter nights regularly drop to 0-5C. R-7 walls (equivalent to ~50mm of fiberglass) will lose heat rapidly. For context:
- Portuguese building code (RCCTE) requires minimum R-values of roughly R-8 to R-13 for walls depending on climate zone
- Most natural building guides recommend R-15+ for walls in any climate with real winters
- The dome shape helps (lower surface-area-to-volume ratio), but R-7 is marginal even with a wood stove

**The earth-sheltered variant claims R-20 to R-25 with 30-40cm walls -- this is consistent and adequate. The standard dome's 100mm / R-7 is the problem.**

### 4. No Temporary Weather Protection During Straw-Clay Drying
The straw-clay shell requires 2-4 weeks of drying while fully exposed on the dome exterior. One serious rainstorm would:
- Saturate the straw-clay, causing it to slump off the wattle
- Extend drying time by weeks
- Potentially cause rot in the untreated wattle poles beneath

**The guide does not mention temporary tarps, plastic sheeting, or any weather protection strategy.** This is a critical omission for a build that could happen in Portuguese autumn/winter.

### 5. Untreated Wattle Longevity Risk
~200 wattle poles receive **zero preservative treatment** (no borax, no charring, no sealing). They are protected solely by encasement between straw-clay and lime plaster. If either seal is compromised:
- Portuguese subterranean termites (*R. grassei*) can reach the untreated wood through the gabion/soil interface
- Wood-boring beetles can colonize through any crack in the lime plaster
- Fungal rot can start at any persistent moisture ingress point

The guide claims 25-35 year structural lifespan but provides no inspection protocol for wattle condition, no discussion of what happens when wattle fails inside a sealed wall, and no replacement strategy. This is the weakest link in the long-term durability chain.

---

## STRUCTURAL AND SAFETY CONCERNS

### 6. Live Bending Without Safety Protocol
Two people hand-bending 11.6m green eucalyptus poles (8-10cm diameter, ~550 kg/m3) with no bending forms, jigs, or safety rigging. A pole snapping under tension could cause serious injury. The guide describes scoring (which helps) but includes:
- No hard hat or eye protection recommendation
- No discussion of pole failure modes during bending
- No fallback if a pole cracks partway through raising
- No guidance on wind conditions (bending a long pole in wind is dangerous)

### 7. Crown Lashing as Sole Structural Keystone
All 16 poles meet at the crown and are lashed with galvanized wire. This is the most critical connection in the entire structure. Concerns:
- Galvanized wire loosens as eucalyptus shrinks 5-8%
- The guide mentions re-tightening during initial drying but not ongoing maintenance
- Accessing the 4m-high crown for inspection/maintenance requires scaffolding
- No redundancy -- if the wire corrodes or loosens, all 16 poles can shift

**Consider:** stainless steel wire or cable clamps, a crown plate/ring, or periodic re-lashing protocol in the maintenance schedule.

### 8. Single Exit (Fire Safety)
The dome has one door (through a tunnel-like wind porch) and one 30-40cm apex vent at 4m height. If the entrance is blocked by fire or structural failure:
- No secondary exit exists
- The apex vent is too small and too high for emergency egress
- The wind porch (katak) could act as a chimney in a fire, channeling flames toward the occupant

**Consider:** a second window large enough for emergency egress, or a breakaway panel.

### 9. No Seismic Consideration
Portugal is seismically active (the 1755 Lisbon earthquake destroyed the capital). The guide never mentions:
- Seismic zones or risk assessment
- How the flexible wattle structure would perform in an earthquake (likely well, but should be stated)
- Foundation-to-frame connection adequacy under lateral loads
- Whether the gabion foundation could shift on clay soils during seismic events

### 10. No Wind Load Analysis
A 4m-tall dome on an exposed Portuguese hilltop could face significant wind loads. The guide mentions wire-lashing poles to gabions for "uplift resistance" but provides:
- No wind speed ratings or design loads
- No guidance on site selection relative to wind exposure
- No discussion of what wind speed would be dangerous
- No reinforcement options for exposed sites

---

## MATERIAL AND SOURCING ISSUES

### 11. Cork Insulation Never Mentioned
Portugal produces ~50% of the world's cork. Cork boards:
- R-3.6 per inch (R-14 at 100mm -- double the claimed R-7 of straw-clay)
- Fire resistant (self-extinguishing)
- Rot and insect resistant naturally
- Locally available and affordable in Portugal
- Can be cut to follow a curve and mechanically fastened

This is the most obvious material omission in the guide. Cork boards on the exterior of the wattle (under the EPDM) would solve the insulation, formwork, and overhead application problems simultaneously.

### 12. Herbicide Use Conflicts with Ecological Framing
The project frames itself as ecological restoration but specifies glyphosate or triclopyr for stump treatment. Many eco-builders and permaculture practitioners would object. The guide provides excellent environmental profiles for both chemicals, but should also discuss:
- Mechanical alternatives (stump grinding, repeated cutting every 6 weeks for 2+ years)
- Effectiveness trade-offs (mechanical methods are 60-70% effective vs 95-98% for chemical)
- Why chemical treatment may actually be the more ecologically responsible choice (prevents years of resprouting and continued water/nutrient extraction)

### 13. Borax Solution Disposal
The 6-step treatment requires 72+ hours of borax soaking in a 12m trough. After multiple batches, hundreds of liters of 2% borax/boric acid solution need disposal. The guide doesn't address:
- Whether spent solution can be reused (it can, with concentration testing)
- Safe disposal methods
- Environmental impact of borax on soil/water
- Buffer distances from water courses

### 14. EPDM Environmental Contradiction
The guide promotes zero-concrete, all-natural construction but specifies EPDM (petroleum-derived synthetic rubber) as the sole waterproofing layer. Worth discussing:
- The pragmatic reasoning (no natural alternative matches EPDM's durability on a curved surface)
- Alternatives considered and rejected (pine tar, bitumen, lime-based waterproofing)
- End-of-life EPDM recyclability

### 15. Linseed Oil Heating Safety
Heating linseed oil to 60-70C and applying it to wood generates rags/cloths that are a serious spontaneous combustion risk. The guide should include:
- Never leave linseed-soaked rags in a pile (they self-ignite)
- Spread rags flat to dry or submerge in water
- Use a double-boiler setup, never direct heat
- Keep fire extinguisher nearby

### 16. Straw Sourcing in Eucalyptus Landscapes
If the property is dominated by eucalyptus monoculture, local straw bale sourcing may require significant transport. The guide specifies ~15 bales for the standard dome but doesn't discuss:
- Where to find straw in eucalyptus-dominated regions
- Alternative local fibers (dried bracken fern, reed/cana, dried grass)
- Whether eucalyptus leaf litter could substitute (it cannot -- oils are problematic)

---

## LIVABILITY AND DESIGN GAPS

### 17. No Plumbing or Water System
Neither design documents water supply, drainage, or sanitation:
- No sink, shower, or toilet infrastructure
- No greywater management
- No rainwater collection (despite having a dome that sheds water perfectly)
- The floor plan implies outdoor composting toilet but doesn't document one

### 18. No Electrical System (Standard Dome)
The earth-sheltered variant mentions solar panels but the standard dome has zero electrical documentation:
- No lighting plan
- No outlet placement
- No cable routing through straw-clay walls (which is non-trivial)
- No off-grid power sizing

### 19. Kitchen Infrastructure Missing
The "south kitchen arc" in the floor plan has no documentation of:
- Countertop construction
- Water supply/drainage
- Cooking setup (gas ring? rocket stove? outdoor kitchen?)
- Food storage in a high-humidity natural building

### 20. Limited Natural Light
2-3 windows at ~0.95m x 1.1m = roughly 2-3m2 of glazing for a 28m2 space. Portuguese building regulations typically require glazing area of 10-15% of floor area (2.8-4.2m2). The dome may be borderline compliant. Consider:
- A larger south-facing window for passive solar
- A translucent apex cap instead of opaque EPDM (polycarbonate dome?)
- Tubular skylights through the shell

### 21. No Accessibility Discussion
The narrow tunnel entrance (katak), raised sleeping platform, and 28m2 circular layout with no level changes offer zero accessibility. Worth a brief discussion of:
- Who this design is and isn't suitable for
- Modifications for aging-in-place (wider door, no platform)
- The earth-sheltered variant's advantages (rectangular, level floor, wider door)

---

## PROCESS AND PRACTICAL IMPROVEMENTS

### 22. Missing Scaffolding and Safety Equipment Guidance
Working at heights up to 4m on a curved surface requires:
- Scaffolding plan (or at minimum ladder placement guidance)
- Fall protection on the upper dome
- How to reach the crown for lashing, vent installation, EPDM cap

### 23. No Skill Prerequisites or Practice Projects
This guide describes advanced natural building techniques. A first-time builder attempting a full dome with no prior wattle/daub/lime experience is likely to make costly mistakes. Consider:
- A "practice wall" section (build a 1m x 1m wattle panel, apply straw-clay, plaster it)
- Recommended workshops or training
- A skills self-assessment checklist

### 24. No Discussion of Building Permits
Portugal has building regulations administered by the local camara municipal. The guide doesn't address:
- Whether these structures require a permit (likely yes for permanent habitation)
- Rural construction exemptions (some exist for agricultural structures)
- Whether the designs could be classified as "temporary" or "agricultural"
- The pre-existing building notification system (comunicacao previa)

### 25. No Thermal Performance Data
Claims about interior temperature (standard dome) and "near-zero heating needs" (earth-sheltered) lack:
- Any thermal modeling or calculation
- Monitoring data from built examples
- Comparison to conventional construction
- Heating load estimates for worst-case winter conditions

### 26. Maintenance Schedule Gaps
The maintenance page covers seasonal inspections but doesn't address:
- Crown wire re-tensioning protocol (how often? how to access?)
- EPDM membrane inspection beneath the stone skirt and lime render (how?)
- Wattle condition assessment (impossible without removing plaster?)
- Living roof drainage maintenance
- When/how to detect the point where EPDM replacement becomes necessary

### 27. No Cost Comparison Context
The BOM gives costs (EUR 1,600-7,650) but doesn't compare to:
- Local conventional construction costs per m2
- Other natural building methods (straw bale, earthbag, cob)
- Rental costs in rural Portugal (to frame the payback period)

---

## CONTENT COMPLETENESS GAPS

### 28. Earth Sheltered SolarPod (10 Stub Pages)
The biggest content gap. Pages 02-11 are all stubs with bullet-point outlines. The overview is excellent, but the build instructions don't exist yet. This design is arguably more practical than the dome (rectangular, earth-sheltered, solar-integrated) and deserves equal documentation depth.

### 29. Da Vinci Bridge Structural Verification
The earth-sheltered variant's roof uses Da Vinci's self-supporting bridge principle. This is a fascinating concept but:
- No structural analysis for the span (5m is significant)
- No load calculations (living roof at 200 kg/m2 + snow + maintenance access)
- No historical examples at this span with eucalyptus poles
- No discussion of what happens if one rafter is removed (progressive collapse?)

### 30. Compost Heating System
A cross-section illustration appears in the moisture management page showing "compost-generated warmth circulates through underfloor pipes" but:
- No text description of the system
- No construction details
- No sizing or temperature expectations
- No maintenance requirements (compost piles need regular turning/rebuilding)

---

## SUMMARY: TOP 10 PRIORITIES

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 1 | **Formwork contradiction** -- straw-clay technique doesn't work on a curved exterior without forms | Build failure | Major rewrite of walls + shell pages |
| 2 | **Wall thickness inconsistency** -- 35-45cm vs 100mm on different pages | Confusion, incorrect builds | Quick fix (reconcile the two pages) |
| 3 | **Cork insulation omission** -- the obvious local alternative is never discussed | Missed opportunity | Add comparison section |
| 4 | **No weather protection during drying** -- one rainstorm ruins the straw-clay shell | Build failure | Add tarp/protection section to shell page |
| 5 | **R-7 insulation inadequacy** -- below code and comfort thresholds | Cold, non-compliant structure | Discuss thicker application or cork alternative |
| 6 | **Untreated wattle durability** -- no inspection or replacement strategy | Premature structural failure | Add wattle protection discussion |
| 7 | **Safety gaps** -- no scaffolding, fall protection, or bending safety | Injury risk | Add safety section |
| 8 | **No building permits discussion** -- legal compliance in Portugal | Illegal construction | Add reference page |
| 9 | **Earth-sheltered stubs** -- 10 pages of placeholder content | Half the guide is empty | Major content creation |
| 10 | **No utility systems** -- plumbing, electrical, water, sanitation | Uninhabitable as documented | Add reference pages |
