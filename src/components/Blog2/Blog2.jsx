import React from 'react'

export default function Blog2(){
  return (
    <div className="w-[1024px] text-start h-[9752.25px] flex-col justify-start items-center gap-6 inline-flex">
    <div className="h-7 flex-col justify-start items-start flex">
        <div className="pr-6 justify-start items-start inline-flex">
            <div className="text-[#2d3239] text-xl font-semibold font-['Inter'] leading-7">Intro</div>
        </div>
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[7.50px] font-normal font-['Inter'] leading-[25px]">There are two types of work.    <br/>Planned work and unplanned work.</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Planned work are tasks and activities that have been organized and scheduled in<br/>advance. This type of work typically happens in projects that tie into roadmaps and<br/>larger company goals. Because the work has been planned before, you know what<br/>you're trying to do, who's going to work on it, and when they will get started.</div>
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Unplanned work, on the other hand, are issues and emergencies that appear<br/>suddenly and seemingly randomly in the form of a bug report, an important feature<br/>request, or an outage.</div>
    </div>
    <div className="h-[254px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[248px] relative rounded-lg" src="https://via.placeholder.com/588x248" />
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div><span classname="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Unplanned work happens unexpectedly, but it’s not unexpected. You </span><span classname="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">know</span><span classname="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]"> that<br/>there will be bug reports, you just don’t know when, where, and in what shape they<br/>will come up. The only thing that is certain is that they will appear.</span></div>
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">There is no way to escape these ad hoc forces of the product building process. But<br/>there are strategies to plan for unplanned work and tools to systematically manage<br/>it. What these are and how they work is what we’ll cover in the next few chapters.</div>
    </div>
    <div className="h-[25px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">Let’s begin.</div>
    </div>
    <div className="h-9 pt-2 flex-col justify-start items-start flex">
        <div className="pr-6 justify-start items-start inline-flex">
            <div className="text-[#2d3239] text-xl font-semibold font-['Inter'] leading-7">The challenges of unplanned work</div>
        </div>
    </div>
    <div className="h-[50px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Before we jump into the specifics, we should take a step back and think about what<br/>makes unplanned work so difficult to manage in the first place.</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">Unplanned work has two broad phases: There’s an intake phase where unplanned<br/>work gets reported. And there’s an execution phase in which the reported<br/>problems are actually resolved. Both of these phases have their own unique<br/>challenges.</div>
    </div>
    <div className="h-[354px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[348px] relative rounded-lg" src="https://via.placeholder.com/588x348" />
    </div>
    <div className="h-[150px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">Intake is challenging because unplanned work appears in so many different and<br/>disconnected places. Take bugs as an example. They will turn up across many<br/>different channels, both internally and externally: social media, email, Slack, a<br/>meeting, your customer support tool, and half a dozen other places you didn’t even<br/>think about. Is every recipient across these various touch points able to quickly file<br/>a bug report? Do they know where to file it, how to write it, and who to send it to?</div>
    </div>
    <div className="h-[150px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">Execution is challenging due to uncertain responsibilities and priorities. Because<br/>unplanned work is unplanned, it’s not always clear who should work on it. In fact, it<br/>might not even be clear if anyone should work on it at all. Some issues are<br/>emergencies, but others can be ignored. Some requests seem irrelevant, but what<br/>if they come from your most important customer? How do you ensure the most<br/>important work actually gets done quickly?</div>
    </div>
    <div className="h-[25px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Let’s take a closer look at each of these phases, starting with intake.</div>
    </div>
    <div className="h-9 pt-2 flex-col justify-start items-start flex">
        <div className="pr-6 justify-start items-start inline-flex">
            <div className="text-[#2d3239] text-xl font-semibold font-['Inter'] leading-7">Phase 1: Zero-friction intake</div>
        </div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">The intake phase is all about turning reported bugs and other requests into explicit,<br/>actionable company knowledge by feeding them into your issue tracking system.<br/>Because every piece of friction increases the likelihood that something doesn’t get<br/>reported, it is critical that this process is as simple and smooth as possible.</div>
    </div>
    <div className="h-[25px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Why is this point so important?</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Think of your issue tracking system as a hive mind or a collective brain that<br/>contains important knowledge about the state of your product building process. It’s<br/>the source of truth upon which you and your company make decisions and<br/>coordinate work.</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">If the data in your hive mind is incomplete or incorrect, however, it stops being a<br/>source of truth. It becomes a source of half-truths. You can't know what people are<br/>thinking if it's too hard for them to communicate with you, and you can't act on<br/>what they say if you don't keep track of it.</div>
    </div>
    <div className="h-[622px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[616px] relative rounded-lg" src="https://via.placeholder.com/588x616" />
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">The focus of the intake process on the left side of the Venn diagram: We want to<br/>minimize the amount of unreported issues so that the knowledge in your issue<br/>tracking system accurately reflects the reality you are in.</div>
    </div>
    <div className="h-[25px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">So how do we get there?</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">The first step is to allow intake directly at the source where unplanned work first<br/>appears. It’s like instrumenting your organization to get full situational awareness of<br/>everything that’s happening. The complexity here is that there are many different<br/>sources and you want to cover as many of them as possible.</div>
    </div>
    <div className="self-stretch justify-start items-baseline gap-6 inline-flex">
        <div className="grow shrink basis-0 h-px" />
        <div className="w-[588px] h-[120px] relative">
            <div className="w-[418.79px] h-6 left-0 top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">This is why at Linear we put such a strong emphasis on </div>
            <div className="px-[3px] py-0.5 left-[415.59px] top-[-2px] absolute bg-black/0 justify-start items-start inline-flex">
                <div className="justify-start items-start flex">
                    <div className="text-[#2d3239] text-base font-normal font-['Inter'] underline leading-normal">integrations</div>
                </div>
            </div>
            <div className="w-[75.48px] h-6 left-[506.86px] top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">. From the</div>
            <div className="w-[585.70px] h-24 left-0 top-[24px] absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">start, we developed integrations for the most common sources of unplanned<br/>work. They include customer support tools like Intercom, performance<br/>monitoring platforms such as Sentry, and popular communication services like<br/>Slack.</div>
        </div>
        <div className="w-[194px] pl-[78px] flex-col justify-start items-start inline-flex">
            <div className="h-[38px] relative">
                <div className="w-4 h-4 left-0 top-[1px] absolute justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                    </div>
                </div>
                <div className="w-[72.80px] h-[35px] left-0 top-[1px] absolute">
                    <div className="w-[38.29px] h-[19px] left-[23.66px] top-[-1.50px] absolute text-[#2d3239] text-[13px] font-normal font-['Inter'] underline leading-[19px]">Linear</div>
                    <div className="w-[73px] h-[19px] left-0 top-[17.50px] absolute text-[#2d3239] text-[12.90px] font-normal font-['Inter'] underline leading-[19px]">Integrations</div>
                </div>
            </div>
        </div>
    </div>
    <div className="h-[334.25px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[328.25px] relative rounded-lg" src="https://via.placeholder.com/588x328" />
    </div>
    <div className="w-[588px] h-[100px] relative">
        <div className="w-[572.34px] h-[75px] left-0 top-0 absolute text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Slack plays a particularly important role in this stack because it’s the place where<br/>most unplanned work surfaces. It acts as a sort of catch-all for the long-tail of<br/>unplanned reports and requests. </div>
        <div className="left-[233.58px] top-[50px] absolute justify-start items-start inline-flex">
            <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">As others have described it</div>
        </div>
        <div className="w-[94.79px] h-[25px] left-[428.78px] top-[50px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">, Slack is like </div>
        <div className="w-[575.55px] h-11 left-0 top-[53px] absolute">
            <div className="w-[53.01px] h-[25px] left-[523.38px] top-[-3px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">“911 for</div>
            <div className="w-[463.16px] h-[25px] left-0 top-[22px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">whatever isn’t possible natively in a company’s productivity apps”</div>
        </div>
        <div className="w-[4.47px] h-[25px] left-[462.78px] top-[75px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">.</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div><span classname="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">The 911 analogy is interesting but not entirely accurate. When you call 911,<br/>someone </span><span classname="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">will</span><span classname="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]"> respond and take action. When you post on Slack, someone </span><span classname="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">might<br/></span><span classname="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">respond and take action. You don’t know if anyone has seen your call for help or if<br/>you have just been shouting into the void.</span></div>
    </div>
    <div className="h-[379px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[373px] relative rounded-lg" src="https://via.placeholder.com/588x373" />
    </div>
    <div className="self-stretch justify-start items-baseline gap-6 inline-flex">
        <div className="grow shrink basis-0 h-px" />
        <div className="w-[588px] h-24 relative">
            <div className="w-[584.09px] h-12 left-0 top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">To improve this area of unplanned work, we recently introduced a new feature<br/>called </div>
            <div className="px-[3px] py-0.5 left-[46.14px] top-[22px] absolute bg-black/0 justify-start items-start inline-flex">
                <div className="text-[#2d3239] text-base font-semibold font-['Inter'] underline leading-normal">Linear Asks</div>
            </div>
            <div className="w-[448.54px] h-6 left-[138.78px] top-[24px] absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">. With Asks, anyone in a Slack workspace can quickly turn a</div>
            <div className="w-[583.84px] h-12 left-0 top-[48px] absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">conversation into a request that automatically gets routed to the relevant team<br/>in Linear.</div>
        </div>
        <div className="w-[194px] pl-[78px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch justify-start items-center gap-[7.66px] inline-flex">
                <div className="w-4 h-4 justify-center items-center flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                    </div>
                </div>
                <div className="justify-start items-start flex">
                    <div className="text-[#2d3239] text-[13px] font-normal font-['Inter'] underline leading-[19px]">Linear Asks</div>
                </div>
            </div>
        </div>
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">The core idea behind Asks is to make unplanned work explicit and actionable —<br/>but in the most frictionless way possible (remember, we want to maximize the<br/>probability that intake actually happens):</div>
    </div>
    <div className="h-[842px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[836px] relative rounded-lg" src="https://via.placeholder.com/588x836" />
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Most importantly, the person making the request has complete peace of mind that<br/>their request will be seen and taken care of. While we don’t like the comparison too<br/>much, there are a lot of conceptual similarities between Asks and an emergency<br/>hotline. It’s the missing piece that actually turns Slack into 911 for unplanned work.</div>
    </div>
    <div className="h-[50px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Now that we have the intake process covered, let’s move on to the execution<br/>phase.</div>
    </div>
    <div className="h-9 pt-2 flex-col justify-start items-start flex">
        <div className="pr-6 justify-start items-start inline-flex">
            <div className="text-[#2d3239] text-xl font-semibold font-['Inter'] leading-7">Phase 2: Efficient execution with Triage</div>
        </div>
    </div>
    <div className="h-[150px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">Most issue tracking systems have frameworks for planned work, but no native<br/>conceptual containers for unplanned work. While planned work is neatly organized<br/>in projects and roadmaps, there is no clear, predefined path for what should<br/>happen with unplanned work. It either constantly disrupts the team’s existing work<br/>or ends up being dumped onto an endless backlog never to be looked at again (or<br/>both).</div>
    </div>
    <div className="self-stretch justify-start items-baseline gap-6 inline-flex">
        <div className="grow shrink basis-0 h-px" />
        <div className="w-[588px] h-12 relative">
            <div className="w-[574.62px] h-12 left-0 top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">To manage unplanned work systematically rather than just locally, Linear has<br/>an important concept called </div>
            <div className="px-[3px] py-0.5 left-[210.84px] top-[22px] absolute bg-black/0 justify-start items-start inline-flex">
                <div className="text-[#2d3239] text-base font-normal font-['Inter'] underline leading-normal">Triage</div>
            </div>
            <div className="w-[4.68px] h-6 left-[260.98px] top-[24px] absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">.</div>
        </div>
        <div className="w-[194px] pl-[78px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch justify-start items-center gap-[7.66px] inline-flex">
                <div className="w-4 h-4 justify-center items-center flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                    </div>
                </div>
                <div className="justify-start items-start flex">
                    <div className="text-[#2d3239] text-[13px] font-normal font-['Inter'] underline leading-[19px]">Triage Docs</div>
                </div>
            </div>
        </div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-sm font-normal font-['Inter'] leading-[25px]">Triage is a shared inbox for your team that centralizes all incoming unplanned<br/>work. All the bug reports, feature ideas, alerts, and other requests that get reported<br/>and filed in the various different channels we talked about in the previous chapter<br/>are added to this queue.</div>
    </div>
    <div className="h-[414px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[408px] relative rounded-lg" src="https://via.placeholder.com/588x408" />
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Triage provides a chance to review, update, and prioritize each issue before it gets<br/>assigned and added to the team's workflow. This helps to filter out irrelevant<br/>requests and duplicates.</div>
    </div>
    <div className="h-[25px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Let’s go back to our Venn diagram from earlier to understand why this is important.</div>
    </div>
    <div className="h-[525px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[519px] relative rounded-lg" src="https://via.placeholder.com/588x519" />
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">While the intake process is designed to reduce the number of unreported issues on<br/>the left side of the Venn diagram, the first part of execution phase is there to verify<br/>that whatever we are feeding into the issue tracking system is actually accurate.</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">By reviewing all issues, we can filter out invalid requests, ask for more information<br/>if necessary, and merge duplicates that have been reported before. This way we<br/>ensures that the knowledge in your “company hive mind” is not just a complete but<br/>also an accurate reflection of reality.</div>
    </div>
    <div className="h-[100px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">The review process also helps to clarify what part of the unplanned workload is<br/>most important and who should work on it. This avoids scope creep and<br/>distractions that usually happen when unplanned work doesn’t get managed<br/>systematically.</div>
    </div>
    <div className="h-[25px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">The review process boils down to four primary actions:</div>
    </div>
    <div className="h-[380px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[374px] relative rounded-lg" src="https://via.placeholder.com/588x374" />
    </div>
    <div className="self-stretch justify-start items-baseline gap-6 inline-flex">
        <div className="grow shrink basis-0 h-px" />
        <div className="w-[588px] h-[120px] relative">
            <div className="w-[568.75px] h-24 left-0 top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">This leaves us with the challenge of accountability (or the lack thereof). To<br/>plan for unplanned work we need to define roles and priorities, so that tasks<br/>are actually taken care of in a timely manner. We solve the accountability<br/>problem with Triage responsibilities. This is </div>
            <div className="w-[533.47px] h-[52px] left-0 top-[70px] absolute bg-black/0">
                <div className="w-[206.61px] h-6 left-[327.06px] top-[2px] absolute text-[#2d3239] text-base font-normal font-['Inter'] underline leading-normal">an explicitly defined person</div>
                <div className="w-[349.78px] h-6 left-0 top-[26px] absolute text-[#2d3239] text-base font-normal font-['Inter'] underline leading-normal">responsible for dealing with incoming requests</div>
            </div>
            <div className="w-[153.59px] h-6 left-[349.58px] top-[96px] absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal"> in the Triage queue.</div>
        </div>
        <div className="w-[194px] pl-[78px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[95px] flex-col justify-start items-start flex">
                <div className="self-stretch text-[#62666d] text-[13px] font-normal font-['Inter'] leading-[19px]">If we stick to our<br/>911 analogy, this<br/>person is<br/>effectively the<br/>first responder.</div>
            </div>
        </div>
    </div>
    <div className="self-stretch justify-start items-baseline gap-6 inline-flex">
        <div className="grow shrink basis-0 h-px" />
        <div className="w-[588px] h-[72px] relative">
            <div className="px-[3px] py-0.5 left-[-3px] top-[-2px] absolute bg-black/0 justify-start items-start inline-flex">
                <div className="text-[#2d3239] text-base font-normal font-['Inter'] underline leading-normal">You can manually select one or multiple team members</div>
            </div>
            <div className="w-[154.89px] h-6 left-[413.88px] top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal"> who will get notified</div>
            <div className="w-[582.04px] h-12 left-0 top-[24px] absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">(or auto-assigned) for each new issue, or use an existing PagerDuty schedule<br/>to automate the process.</div>
        </div>
        <div className="w-[194px] pl-[78px] flex-col justify-start items-start inline-flex">
            <div className="h-[57px] relative">
                <div className="w-4 h-4 left-0 top-[1px] absolute justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                    </div>
                </div>
                <div className="left-0 top-[-0.50px] absolute flex-col justify-start items-center inline-flex">
                    <div className="text-[#2d3239] text-[13px] font-normal font-['Inter'] underline leading-[19px]">Triage</div>
                    <div className="text-[#2d3239] text-[13px] font-normal font-['Inter'] underline leading-[19px]">Responsibility<br/>Docs</div>
                </div>
            </div>
        </div>
    </div>
    <div className="h-[225px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-[219px] relative rounded-lg" src="https://via.placeholder.com/588x219" />
    </div>
    <div className="self-stretch justify-start items-baseline gap-6 inline-flex">
        <div className="grow shrink basis-0 h-px" />
        <div className="w-[588px] h-24 relative">
            <div className="w-[142.39px] h-6 left-0 top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">Lastly, we can use </div>
            <div className="px-[3px] py-0.5 left-[139.19px] top-[-2px] absolute bg-black/0 justify-start items-start inline-flex">
                <div className="text-[#2d3239] text-base font-normal font-['Inter'] underline leading-normal">service-level agreements (SLAs)</div>
            </div>
            <div className="w-[190.58px] h-6 left-[386.30px] top-0 absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal"> to communicate urgency</div>
            <div className="w-[584.36px] h-[72px] left-0 top-[24px] absolute text-[#2d3239] text-base font-normal font-['Inter'] leading-normal">and set guidance on completion deadlines. SLAs are applied automatically<br/>depending on pre-defined variables. For example, you can set specific<br/>timelines for urgent bugs or for requests from your most important customers.</div>
        </div>
        <div className="w-[194px] pl-[78px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch justify-start items-center gap-[7.66px] inline-flex">
                <div className="w-4 h-4 justify-center items-center flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                        <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                    </div>
                </div>
                <div className="justify-start items-start flex">
                    <div className="text-[#2d3239] text-[13px] font-normal font-['Inter'] underline leading-[19px]">SLA Docs</div>
                </div>
            </div>
        </div>
    </div>
    <div className="h-[214px] pb-1.5 flex-col justify-start items-start flex">
        <img className="w-[588px] h-52 relative rounded-lg" src="https://via.placeholder.com/588x208" />
    </div>
    <div className="h-[75px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-sm font-normal font-['Inter'] leading-[25px]">SLAs help you to establish and maintain internal standards for how quickly<br/>unplanned work gets resolved. But they also give your team a framework for<br/>prioritization, so that the most important issues and requests get resolved first.</div>
    </div>
    <div className="h-9 pt-2 flex-col justify-start items-start flex">
        <div className="pr-6 justify-start items-start inline-flex">
            <div className="text-[#2d3239] text-xl font-semibold font-['Inter'] leading-7">Outro</div>
        </div>
    </div>
    <div className="h-[50px] flex-col justify-start items-start flex">
        <div className="text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Wrapping up, let’s summarize the most important points and provide you with<br/>some useful links so you can set up your own plan for unplanned work.</div>
    </div>
    <div className="h-[540px] pl-6 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch h-[50px] pl-1 pr-5 flex-col justify-start items-start flex">
            <div className="text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">Unplanned work are bugs, alerts, and other requests and emergencies that<br/>appear suddenly. You can’t escape this type of work, but you can manage it.</div>
        </div>
        <div className="self-stretch h-[50px] pl-1 pr-5 flex-col justify-start items-start flex">
            <div className="self-stretch text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Unplanned work has two broad phases: An intake phase and an execution<br/>phase.</div>
        </div>
        <div className="h-[150px] relative">
            <div className="w-[530.81px] h-[125px] left-[4px] top-0 absolute text-[#2d3239] text-sm font-normal font-['Inter'] leading-[25px]">The intake phase is about turning reported bugs and requests into explicit,<br/>actionable issues. To make this process as frictionless as possible, you<br/>enable intake right where unplanned work first appears — with integrations<br/>to your most important tools. Linear has integrations with customer support<br/>platforms (</div>
            <div className="left-[80.13px] top-[100px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">Intercom</div>
            </div>
            <div className="w-[8.65px] h-[25px] left-[143.42px] top-[100px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">, </div>
            <div className="left-[151.88px] top-[100px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">Zendesk</div>
            </div>
            <div className="w-[8.65px] h-[25px] left-[213.73px] top-[100px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">, </div>
            <div className="left-[222.19px] top-[100px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">Front</div>
            </div>
            <div className="w-[8.65px] h-[25px] left-[259.28px] top-[100px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">, </div>
            <div className="left-[267.73px] top-[100px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">Plain</div>
            </div>
            <div className="w-[145.95px] h-[25px] left-[302.38px] top-[100px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">), engineering tools (</div>
            <div className="left-[448.13px] top-[100px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">Sentry</div>
            </div>
            <div className="w-[4.47px] h-[25px] left-[495.33px] top-[100px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">,</div>
            <div className="left-[4px] top-[125px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">Incident.io</div>
            </div>
            <div className="w-[44.62px] h-[25px] left-[78.92px] top-[125px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">), and </div>
            <div className="left-[123.34px] top-[125px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">many other products</div>
            </div>
            <div className="w-[4.47px] h-[25px] left-[271.86px] top-[125px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">.</div>
        </div>
        <div className="h-[75px] relative">
            <div className="w-[507.92px] h-[50px] left-[4px] top-0 absolute text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">Slack is a particularly important intake channel where a lot of unplanned<br/>work surfaces. </div>
            <div className="left-[112.86px] top-[25px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">We built a tool called Linear Asks</div>
            </div>
            <div className="w-[172.79px] h-[25px] left-[348.38px] top-[25px] absolute text-[#2d3239] text-sm font-normal font-['Inter'] leading-[25px]"> that allows your team to</div>
            <div className="w-[352.54px] h-[25px] left-[4px] top-[50px] absolute text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">quickly turn these requests into actionable issues.</div>
        </div>
        <div className="h-[100px] relative">
            <div className="w-[528.70px] h-[75px] left-[4px] top-0 absolute text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">In the execution phase, we first centralize all incoming unplanned work in a<br/>shared team inbox called Triage, where each issue gets reviewed,<br/>prioritized, and assigned. </div>
            <div className="w-[497.19px] h-11 left-[4px] top-[53px] absolute">
                <div className="w-[315.03px] h-[25px] left-[182.36px] top-[-3px] absolute text-[#7281ff] text-[14.88px] font-semibold font-['Inter'] leading-[25px]">You can learn more about Triage and how to</div>
                <div className="w-[196.93px] h-[25px] left-0 top-[22px] absolute text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">enable it for your team here</div>
            </div>
            <div className="w-[4.47px] h-[25px] left-[200.73px] top-[75px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">.</div>
        </div>
        <div className="h-[75px] relative">
            <div className="w-[390.03px] h-[25px] left-[4px] top-0 absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">To get the most out of Triage, we recommend having a </div>
            <div className="w-[496.61px] h-11 left-[4px] top-[3px] absolute">
                <div className="w-[106.98px] h-[25px] left-[389.83px] top-[-3px] absolute text-[#7281ff] text-[14.88px] font-semibold font-['Inter'] leading-[25px]">clearly defined</div>
                <div className="w-[253.06px] h-[25px] left-0 top-[22px] absolute text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">person who reviews incoming work</div>
            </div>
            <div className="w-[132.09px] h-[25px] left-[256.86px] top-[25px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]">. For larger teams, </div>
            <div className="left-[388.75px] top-[25px] absolute justify-start items-start inline-flex">
                <div className="text-[#7281ff] text-sm font-semibold font-['Inter'] leading-[25px]">enabling SLAs</div>
            </div>
            <div className="w-[30.28px] h-[25px] left-[490.81px] top-[25px] absolute text-[#2d3239] text-[15px] font-normal font-['Inter'] leading-[25px]"> can</div>
            <div className="w-[375.31px] h-[25px] left-[4px] top-[50px] absolute text-[#2d3239] text-[14.88px] font-normal font-['Inter'] leading-[25px]">help with the prioritization of time-sensitive requests.</div>
        </div>
    </div>
</div>
  )
}