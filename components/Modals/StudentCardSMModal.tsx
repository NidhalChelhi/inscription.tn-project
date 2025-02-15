"use client";

import { AnimatePresence, motion } from "framer-motion";

const StudentCardSMModal = (props: any) => {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center bg-zinc-100 w-full  h-fit rounded-3xl border-gray-800  sm:px-8 px-4 py-4 gap-4 shadow-lg"
        >
          {/* Header */}
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <div className="flex flex-row justify-between items-center">
              <div className="w-1/3">
                <img src="assets/enicar_logo.png" />
              </div>
              <h3 className="text-xs">Code: 135</h3>
            </div>

            <div className="text-xs">
              <h3>المدرسة الوطنية للمهندسين بقرطاج</h3>
              <h3>Ecole Nationale D'Ingenieurs de Carthage </h3>
            </div>
          </div>
          {/* Title */}
          <h2 className="text-sm font-semibold w-full ">
            Carte étudiant 2023-2024
          </h2>
          {/* Content */}
          <div className="flex flex-row w-full justify-center items-center gap-2">
            <div className="rounded-3xl overflow-hidden w-1/3 flex items-center justify-center">
              <img
                src="assets/mekki-pfp.jpg"
                alt="student image"
                className="w-full object-contain"
              />
            </div>

            <div className="w-1/2 flex flex-col justify-center items-end text-sm font-medium text-end gap-1">
              <h4>محمد المكي</h4>
              <h4>Mohamed Mekki</h4>
              <h4>09/12/2001</h4>
              <h4>132*****</h4>
            </div>
          </div>
          <h4 className="text-xs">-1ere année Cycle Ingénieur-</h4>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StudentCardSMModal;
