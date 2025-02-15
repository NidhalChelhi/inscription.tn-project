"use client";

import { AnimatePresence, motion } from "framer-motion";

const StudentCardModal = (props: any) => {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-start bg-zinc-100 w-[580px]  h-fit rounded-3xl border-gray-800 px-8 py-4 gap-4 shadow-lg"
        >
          {/* Header */}
          <div className="flex flex-row justify-between items-start text-start">
            <div className="w-1/2 text-sm">
              <h3>المدرسة الوطنية للمهندسين بقرطاج</h3>
              <h3>ECOLE NATIONALE D'INGENIEURS DE CARTHAGE </h3>
            </div>
            <div className="w-1/2  flex flex-col justify-end items-end ">
              <div className="w-3/6 flex flex-col justify-center items-center gap-1">
                <img src="assets/enicar_logo.png" />
                <h3 className="text-xs">Code: 135</h3>
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="flex w-full flex-row justify-between items-center text-lg font-semibold">
            <h2>Carte étudiant</h2>
            <h2>2023-2024</h2>
            <h2>بطاقة طالب</h2>
          </div>
          {/* Content */}
          <div className="flex flex-row w-full justify-between items-start gap-x-8">
            <div className="w-1/4  flex flex-col items-center justify-center gap-2">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="assets/mekki-pfp.jpg"
                  alt="student image"
                  className="object-cover"
                />
              </div>
              <h2>1354824</h2>
            </div>

            <div className="w-3/4 flex flex-col justify-end items-center gap-2 mt-2">
              <div className="w-full flex flex-row justify-between items-center text-lg font-medium ">
                <h4>Mohamed Mekki</h4>

                <h4>محمد المكي </h4>
              </div>
              <div className="w-full flex flex-row justify-between items-center ">
                <h4 className="font-medium">Date de naissance</h4>
                <h4>09/12/2001</h4>
                <h4 className="font-medium">تاريخ الولادة</h4>
              </div>
              <div className="w-full flex flex-row justify-between items-center ">
                <h4 className="font-medium">CIN</h4>
                <h4>132*****</h4>
                <h4 className="font-medium">ر ب ت و</h4>
              </div>
              <h4>-1ere année Cycle Ingénieur-</h4>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StudentCardModal;
