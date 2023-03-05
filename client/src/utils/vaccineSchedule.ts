import { millisecondsToDate, dateToObject } from "./time";

export const vaccineScheduler = (data: any, birthday: string) => {
  let scheduled: any = {};

  // todo make relationship between penta1 and penta2 and penta3

  const bcg = data.BCG_HB_VPO_vitD; // done
  const penta1 = data.penta1;
  const penta2 = data.penta2;
  const penta3 = data.penta3;
  const vitAD = data.vitD_vitA; // done
  const rr = data.RR; // done
  const pneumo3 = data.pneumo3; // done
  const dtc1 = data.DTC_RR_VPO_vitA; // done
  const dtc2 = data.DTC_VPO; // done

  scheduled["bcg"] = millisecondsToDate(dateToObject(birthday).getTime());

  if (penta1) {
    if (penta2) {
      scheduled["penta3"] = millisecondsToDate(
        dateToObject(penta2).getTime() + monthToMilliSecond(1)
      );
    } else {
      scheduled["penta2"] = millisecondsToDate(
        dateToObject(penta1).getTime() + monthToMilliSecond(1)
      );
      scheduled["penta3"] = millisecondsToDate(
        dateToObject(penta1).getTime() + monthToMilliSecond(2)
      );
    }
  } else {
    scheduled["penta1"] = millisecondsToDate(
      dateToObject(birthday).getTime() + monthToMilliSecond(2)
    );
    scheduled["penta2"] = millisecondsToDate(
      dateToObject(birthday).getTime() + monthToMilliSecond(3)
    );
    scheduled["penta3"] = millisecondsToDate(
      dateToObject(birthday).getTime() + monthToMilliSecond(4)
    );
  }

  scheduled["vitAD"] = millisecondsToDate(
    dateToObject(birthday).getTime() + monthToMilliSecond(6)
  );
  scheduled["rr"] = millisecondsToDate(
    dateToObject(birthday).getTime() + monthToMilliSecond(9)
  );
  scheduled["pneumo3"] = millisecondsToDate(
    dateToObject(birthday).getTime() + monthToMilliSecond(12)
  );
  scheduled["dtc1"] = millisecondsToDate(
    dateToObject(birthday).getTime() + monthToMilliSecond(18)
  );
  scheduled["dtc2"] = millisecondsToDate(
    dateToObject(birthday).getTime() + monthToMilliSecond(60)
  );

  return scheduled;
};



const monthToMilliSecond = (month: number): number => {
  return month * 86400000 * 30.44;
};
