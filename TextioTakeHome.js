/*
ApplicationEngineeringShortTakeHomeProblemWriteafunctionthatwillhighlightphrasesinadocumentgivenastringandanarrayofhighlightobjects.Ifhighlightsoverlap,showthehigher-priorityhighlightsoverthelower-priorityhighlights.ExampleInput:ExampleOutput:Whencalled,thisfunctionshoulderasethepreviousrender,thenrenderoutthenewtextwithhighlights.Itisnotnecessarytohandleanyadditionalformattingormarkuponthepageotherthanthehighlights.NotethatyouwillhavetheopportunitytouseyoursolutiontothisproblemaspartofyoursolutiontothefinaltakehomeproblemforTextio.AtTextio,wedon’tworkaloneandwedon’tusuallygetcompletedspecificationdocuments–forthepurposesofthisexercisethinkofmeasaProjectManagerandLeadEngineerandpleaseaskquestionsastheycomeup!Youareencouragedtouseanyframeworkand/orlibrariesyouthinkwillallowyoutoshowusyourbestwork.Ifyou’relookingforaplacetostart,we’reprettyfondofCreateReactAppasatoolforquicklygettingupandrunninginamodernUIframework.Weexpecttheproblemtotakeabout3hourstosolve;notethatwevalueworking,readable,andmaintainablesolutionsoveralgorithmicperfection.Whenyou’redone,uploadyoursolutiontoDropboxusingthelinkweprovidedintheemail.Pleaseuploadyourworkatleast24hoursinadvanceofourmeetingsothatwehavetimetolookitover.

*/
const highlightString = (str, arr) => {
  const combined = [...arr];
  combined.sort((a, b) => a.startOffset - b.startOffset);

  const result = [];
  for (let i = 0; i < combined.length - 1; i++) {
    if (
      combined[i + 1].startOffset > combined[i].startOffset &&
      combined[i + 1].endOffset < combined[i].endOffset &&
      combined[i + 1].priority < combined[i].priority
    ) {
      let ob = { ...combined[i] };
      ob.endOffset = combined[i + 1].startOffset;
      let ob2 = { ...combined[i] };
      ob2.startOffset = combined[i + 1].endOffset;
      result.push(ob, combined[i + 1], ob2);
      i++;
    } else if (
      combined[i].endOffset > combined[i + 1].startOffset &&
      combined[i].priority < combined[i + 1].priority
    ) {
      let ob = { ...combined[i], endOffset: combined[i + 1].startOffset };
      let ob2 = { ...combined[i + 1] };

      result.push(ob, ob2);
      i++;
    } else {
      result.push(combined[i]);
    }
  }

  if (
    combined[combined.length - 1].startOffset <
    combined[combined.length - 2].endOffset
  ) {
    result.push({
      ...combined[combined.length - 1],
      endOffset: combined[combined.length - 2].endOffset
    });
  } else {
    result.push(combined[combined.length - 1]);
  }

  const mappings = [...result];
  mappings.sort((a, b) => a.startOffset - b.startOffset);

  const emptyIntervals = [];
  if (mappings[0].startOffset > 0) {
    emptyIntervals.push({
      startOffset: 0,
      endOffset: mappings[0].startOffset,
      color: "white"
    });
  }
  let tempInterval = mappings[0].endOffset;
  for (let j = 1; j < mappings.length; j++) {
    if (tempInterval < mappings[j].startOffset) {
      emptyIntervals.push({
        startOffset: tempInterval,
        endOffset: mappings[j].startOffset,
        color: "white"
      });
    }

    tempInterval = mappings[j].endOffset;
  }
  if (tempInterval < str.length) {
    emptyIntervals.push({
      startOffset: tempInterval,
      endOffset: str.length,
      color: "white"
    });
  }

  const finalResult = [...mappings, ...emptyIntervals].sort(
    (a, b) => a.startOffset - b.startOffset
  );

  return finalResult.map(el => {
    const subs = str.substring(el.startOffset, el.endOffset);
    return <span className={"priority" + el.priority}>{subs}</span>;
  });
};
