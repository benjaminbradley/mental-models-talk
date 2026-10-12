# Entry & Exit Surveys

Anonymous Google Forms, reached by QR code on the opening slide (`deck/slides/00-pre-talk.md`)
and the closing slide (`deck/slides/13-open.md`). Owned by the benjintern Google account.

| Form | Edit link | Responder link |
|---|---|---|
| Entry ("Check-in") | [edit](https://docs.google.com/forms/d/1v0U-5ZOtf_ncYCv2RiqISwOTTC9NGQmIfoOKDqkNnFI/edit) | [respond](https://docs.google.com/forms/d/e/1FAIpQLSfF28Iji3sPDIDnakAKSCLOr8hzNO1ywnFKYc4uQl37aO1VGw/viewform) (QR: `deck/art/qr-entry.svg`) |
| Exit ("Check-out") | [edit](https://docs.google.com/forms/d/1HiW2shKMlKknX-owv-S0OWg5bZAoJ78ds3zTjgW0ZHc/edit) | [respond](https://docs.google.com/forms/d/e/1FAIpQLSd4VQeimVG-IZqlwJIgf_ISR8pJfJ4_4lQ-IGlQ3P_D4-XCeg/viewform) (QR: `deck/art/qr-exit.svg`) |

## Goals

1. **Measure the talk's effectiveness** against its purpose: did attendees' understanding of
   how to work with LLMs (effectively, and with an eye to safety) move?
2. **Improve the talk**: what stuck, what confused, what was left unanswered.

Not goals: satisfaction scores, stance/attitude toward AI (literacy, not conversion - and the
presenter's own feelings are mixed), reading the room live, collecting contact info.

## Design decisions

- **Anonymous**: no email collection, no sign-in, no "limit to 1 response". Consequence: entry
  and exit responses cannot be paired.
- **Movement is measured retrospectively on the exit form** ("before today" / "now" grid).
  The same person rates both, so the pair is internally linked without identity, and it
  corrects for the shift in self-assessment that comes from learning what there is to know.
- **Usage frequency is asked on both forms**, so exit results can be sliced by experience level
  and the two audiences compared.
- **No "how LLMs work" item**: the talk teaches how to work *with* LLMs, not internals.
- **No objective true/false check**: not worth the item-writing risk for this delivery.
- **Required items are multiple choice only**; all open text is optional, so a rushed
  respondent still provides the movement data.
- **Follow-up** is via the contact form link in the exit confirmation message, not a survey field.

## Entry form (~30 seconds)

1. How often do you use AI chat tools like ChatGPT, Claude, Gemini or Copilot? *(required;
   Never / Tried a few times / Monthly / Weekly / Daily)*
2. What are you most curious about regarding AI and LLMs? *(paragraph, optional)*

Confirmation: "Thanks! See you at the end for a quick check-out."

## Exit form (~2 minutes)

1. How well do you understand how to work with LLMs effectively? *(required grid; rows
   Before today / Now; columns 0 - None, 1 - A little, 2 - Some, 3 - Very well;
   four columns so the grid fits a phone screen)*
2. How well do you understand the safety concerns around using LLMs? *(required grid; same)*
3. How often do you use AI chat tools...? *(required; same options as entry; placed after the
   grids so the exit form doesn't open looking identical to the entry form)*
4. If someone asked what you got out of this talk, what would you tell them? *(paragraph, optional)*
5. Was anything confusing, or do you still have unanswered questions? *(paragraph, optional)*
6. Anything else you'd like to say to me about the talk? *(paragraph, optional)*

Confirmation: "Thank you for coming! Want to follow up or get in touch?
https://wegeekout.com/contact-me/"

## Analysis plan

- Per grid: distribution of "now minus before" deltas, overall and by usage level.
- Q4 (recall probe): compare what people report taking away against the talk's methods
  (`take-home.md`); mismatches show what didn't land.
- Q5 and entry Q2: feed unanswered questions and curiosities into the next revision.
